const { We } = require('@wavesenterprise/sdk');
const { TRANSACTIONS } = require('@wavesenterprise/transactions-factory');
const { Keypair } = require("@wavesenterprise/signer");

//main_acc
//const SEED = 'draw ordinary company certain asthma ask napkin total famous turkey orange humor prosper alter strong'

const SEED = 'kiss pretty human finger cattle clarify decide swear ozone credit maid fitness mass soul lizard'
const NODE_URL = 'https://hackathon.welocal.dev/node-0';
const sdk = new We(NODE_URL)


const themont_id = 'BBiaV5WmFnsShSr7bp3grCwjpbo7jvbuk66d5T7ByPq3';
const trx1_id = 'GSZEcVBio3QBJWaktNS1gznYw2We7qDoo8uWhz5FnYUc';

async function call() {
    const config = await sdk.node.config()
    const fee = config.minimumFee[103]

    const keypair = await Keypair.fromExistingSeedPhrase(SEED);

    const tx = TRANSACTIONS.CallContract.V5(
        {
            contractId: 'G8hywT1WHnHdGwEMUqz6vTDPFH9qENbXZMnGjpWBoXbZ',
            fee: fee,
            senderPublicKey: await keypair.publicKey(),
            tx_type: 104,
            contractVersion: 7,
            params: [
                {
                    key: 'action',
                    value: 'addLiquidity',
                    type: 'string'
                }
            ],
            payments: [
                {
                    amount: 2
                },
                {
                    assetId: trx1_id,
                    amount: 50
                },
                {
                    assetId: themont_id,
                    amount: 50
                }
            ]
        })

    const signedTx = await sdk.signer.getSignedTx(tx, SEED);

    console.log(signedTx.getRawBody())

    console.log('broadcasting...');

    const res = await sdk.broadcast(signedTx);

    console.log(res)
}

call()
    .then(() => {
        console.log('Successfully executed')
    })
    .catch(console.error)
