import { Action, Asset, Context, Contract, ContractState, Ctx, Param, Payments, State } from "@wavesenterprise/contract-core";
import { fromBase58, toBase58 } from "@wavesenterprise/crypto-utils";

const zeroAdress = '3Nq4pAf7hRsGDae7ErYqX6u1tevTDYApHXr';
const minLiquidity = 100000;
const lpTokenIdLength = 10;
const separator = '_'

// Для вывода токенов из оборота
const privateAddr = '3P1UyD9wp8ryAcnwLVxHa1gwMCSWq8QnzQU';

function uint8Buf2Int(Uint8Arr) {
    var length = Uint8Arr.length;

    let buffer = Buffer.from(Uint8Arr);
    var result = buffer.readUintBE(0, length);

    return result;
}

@Contract()
export default class MoonAmm {
    @State() state: ContractState;
    @Ctx context: Context;
    @Action({ onInit: true })
    async initCall(
        @Param('name') assetId1: string,
    ) {
        this.state.setString("assetId1", assetId1);
        this.state.setString("senderPublicKey", this.context.tx.senderPublicKey);
    }

    // @Action({ name: 'exampleAction' })
    // async exampleAction(
    //     @Param('testP') testP: string
    // ) {
    //     var enc = new TextEncoder();
    //     if (testP) {
    //         this.state.setString("testP", testP + toBase58(enc.encode(testP)).toString() + "_!_")
    //     } else {
    //         this.state.setString("testP", testP + 'no_params' + "_!_")
    //     }
    //     const senderPK = await this.state.getString('senderPublicKey')
    //     this.state.setString("example_spk", senderPK + "_MyAction")
    // }

    @Action()
    async addLiquidityPool() {

    }

    @Action()
    async addLiquidity(payments: Payments) {
        let token0 = payments[0].assetId
        let token1 = payments[1].assetId

        if (this.isNewPair(token0, token1)) {
            let newAssetName = await this.makeid(lpTokenIdLength);
            let enc = new TextEncoder();
            let newAssetId = await toBase58(enc.encode(newAssetName));
            new Asset(newAssetId).issue({
                description: "Internal MOONSWAP token",
                name: newAssetName,
                decimals: 0,
                isReissuable: true,
                quantity: 0,
                assetId: newAssetId,
                nonce: 1
            });

            await this.setPairTokenId(token0, token1, newAssetId);
            await this.setPairDetails(newAssetId, token0, token1, '0', '0')
        }

        let lpToken = await this.getPairTokenId(token0, token1)

        let amount0 = payments[0].amount;
        let amount1 = payments[1].amount;

        let pairDetails = await this.getPairDetails(lpToken);
        let totalSupply = await this.getPairTotalSupply(lpToken);

        if (totalSupply == 0) {
            let liquidity = Math.round(Math.sqrt(Number(Number(amount0) * Number(amount1)))) - minLiquidity
            new Asset(lpToken)
                .reissue({
                quantity: liquidity + minLiquidity,
                isReissuable: true
                })

            // Вывод из оборота
            new Asset(lpToken).transfer(privateAddr, minLiquidity);

            // Перевод инвестору
            new Asset(lpToken).transfer(this.context.tx.sender, liquidity);

            this.setPairTotalSupply(lpToken, liquidity + minLiquidity);

            await this.setPairDetails(lpToken, token0 , token1, Number(Number(pairDetails[2]) + Number(amount0)).toString(),
            Number(Number(pairDetails[3]) + Number(amount1)).toString());
        } else {
            let a1 = Number(amount0) * totalSupply / Number(pairDetails[2]);
            let a2 = Number(amount1) * totalSupply / Number(pairDetails[3]);
            let liquidity = Math.min(a1, a2);

            new Asset(lpToken)
                .reissue({
                    quantity: liquidity,
                    isReissuable: true
                });

            new Asset(lpToken)
                .transfer(this.context.tx.sender, totalSupply + liquidity)
            
        
            await this.setPairTotalSupply(lpToken, totalSupply + liquidity);
            await this.setPairDetails(lpToken, token0, token1, Number(Number(pairDetails[2]) + Number(amount0)).toString(),
            Number(Number(pairDetails[3]) + Number(amount1)).toString());
        }
    }

    @Action()
    async removeLiquidity() {

    }

    @Action()
    async swap(payments: Payments,
        @Param('tokenOut') tokenOut: string,
    ) {
        let amountIn = payments[0].amount.toNumber();
        let tokenIn = payments[0].assetId;

        let lpToken = await this.getPairTokenId(tokenIn, tokenOut)

        let pairDetails = await this.getPairDetails(lpToken);

        // Calculate the amount of token for user to get
        let amountOut = await this.calcAmountOut(amountIn, Number(pairDetails[2]), Number(pairDetails[3]));

        // assetId_assetAmountOutMin
        let amountOutMin = await this.state.tryGetInt(payments[0].assetId + separator + 'assetAmountOutMin')
        if (amountOut < amountOutMin) {
            throw new Error('Insufficient output amount');
        } else {
            new Asset(pairDetails[1])
                .transfer(this.context.tx.sender, amountOut);

            let reserve0 = String(Number(pairDetails[2]) + amountIn)
            let reserve1 = String(Number(pairDetails[3]) - amountOut)
            this.setPairDetails(lpToken, tokenIn, tokenOut, reserve0, reserve1);
        }
    }

    // Calculation
    private async calcAmountOut(amountIn: number, reserveIn: number, reserveOut: number) {
        let amountInWithFee = amountIn * 950;
        let numerator = amountInWithFee * reserveOut;
        let denominator = reserveIn * 1000 + amountInWithFee;
        return Math.round(1 * numerator / denominator)
    }

    private async calcAmountIn(amountOut: number, reserveIn: number, reserveOut: number) {
        let numerator = reserveIn * amountOut * 1000
        let denominator = (reserveOut - amountOut) * 970
        return Math.round(1 * numerator / denominator) + 1
    }



    // Liquidity
    private async isNewPair(token0: string, token1: string) {
        let pairKey = await this.getPairKey(token0, token1);
        let res = await this.state.tryGetString(pairKey);
        if (res) {
            return false;
        } else {
            return true;
        }
    }

    private async getPairKey(token0: string, token1: string) {
        let token0Val = uint8Buf2Int(fromBase58(token0));
        let token1Val = uint8Buf2Int(fromBase58(token1));

        if (token0Val < token1Val) {
            var arr = Array(token0Val.toString(), token1Val.toString());
            return arr.join(separator)
        } else {
            var arr = Array(token1Val.toString(), token0Val.toString());
            return arr.join(separator)
        }
    }

    private async getPairTokenId(token0: string, token1: string) {
        let pairKey = await this.getPairKey(token0, token1);
        let lpTokenId = this.state.tryGetString(pairKey);
        if (!lpTokenId) {
            throw new Error('Provided pair does not exist!');
        }
        return lpTokenId
    }

    private async setPairTokenId(token0: string, token1: string, issueId: string) {
        let pairKey = await this.getPairKey(token0, token1);
        this.state.setString(pairKey, issueId);
    }

    //    aid0_aid1_0_0 == assetId0_assetId1_reserve0_reserve1
    private async getPairDetails(lpTokenId: string) {
        let details = (await this.state.tryGetString(lpTokenId)).split(separator);
        if (!details) {
            details = String('assetId0_assetId1_0_0').split(separator)
        }
        return details;
    }

    private async setPairDetails(lpTokenId: string, token0: string, token1: string, reserve0: string, reserve1: string) {
        let pairStruct = await this.joinPairStruct(token0, token1, reserve0, reserve1);
        this.state.setString(lpTokenId, pairStruct)
    }


    private async joinPairStruct(token0: string, token1: string, reserve0: string, reserve1: string) {
        let dataArr = Array(token0, token1, reserve0, reserve1);
        return dataArr.join(separator);
    }

    private async getPairTotalSupply(lpTokenId: string) {
        let key = String("totalSupply" + separator + lpTokenId)
        let supply = await this.state.tryGetInt(key);
        if (!supply) {
            return 0;
        }
        return supply;
    }

    private async setPairTotalSupply(lpTokenId: string, newTotalSupply: number) {
        let key = String("totalSupply" + separator + lpTokenId);
        this.state.setInt(key, newTotalSupply);
    }

    private async makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
}

