const {We} = require('@wavesenterprise/sdk');
const {TRANSACTIONS} = require('@wavesenterprise/transactions-factory');
const {Keypair} = require("@wavesenterprise/signer");


const SEED = 'draw ordinary company certain asthma ask napkin total famous turkey orange humor prosper alter strong'
const NODE_URL = 'https://hackathon.welocal.dev/node-0';
const sdk = new We(NODE_URL)

async function update() {
    const config = await sdk.node.config()
    const fee = config.minimumFee[103]

    const keypair = await Keypair.fromExistingSeedPhrase(SEED);

    const tx = TRANSACTIONS.UpdateContract.V4({
        fee: fee + 1000000,
        imageHash: 'e6983c650805c1fa13416a3d8643b2405db5c0c7d2788973159a505634c21d74',
        image: 'jobzzoff/moon_amm',
        contractId: 'G8hywT1WHnHdGwEMUqz6vTDPFH9qENbXZMnGjpWBoXbZ',
        senderPublicKey: await keypair.publicKey(),
        validationPolicy: {type: "any"},
        apiVersion: '1.0'
    })

    const signedTx = await sdk.signer.getSignedTx(tx, SEED);

    console.log(signedTx.getRawBody())

    console.log('broadcasting...');

    const res = await sdk.broadcast(signedTx);

    console.log(res)
}

update()
    .then(() => {
        console.log('Successfully executed')
    })
    .catch(console.error)