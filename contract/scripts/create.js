const {We} = require('@wavesenterprise/sdk');
const {TRANSACTIONS} = require('@wavesenterprise/transactions-factory');
const {Keypair} = require("@wavesenterprise/signer");


const SEED = 'draw ordinary company certain asthma ask napkin total famous turkey orange humor prosper alter strong'
const NODE_URL = 'https://hackathon.welocal.dev/node-0';
const sdk = new We(NODE_URL)

async function create() {
    const config = await sdk.node.config()
    const fee = config.minimumFee[103]

    const keypair = await Keypair.fromExistingSeedPhrase(SEED);

    const tx = TRANSACTIONS.CreateContract.V5({
        fee: fee + 1000000,
        imageHash: 'a30b954b42c4f6559d22d3a2d1c424d5bcda6e8692b1feda642b59d773e85607',
        image: 'jobzzoff/moon_amm',
        validationPolicy: {type: "any"},
        senderPublicKey: await keypair.publicKey(),
        params: [{
            key: 'name',
            type: 'string',
            value: 'RAKAMAKAFO'
        },
        ],
        payments: [],
        contractName: 'amm-test',
        apiVersion: '1.0'
    })

    const signedTx = await sdk.signer.getSignedTx(tx, SEED);

    console.log(signedTx.getRawBody())

    console.log('broadcasting...');

    const res = await sdk.broadcast(signedTx);

    console.log(res)
}

create()
    .then(() => {
        console.log('Successfully executed')
    })
    .catch(console.error)