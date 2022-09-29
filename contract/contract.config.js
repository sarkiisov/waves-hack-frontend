module.exports = {
  image: "contract-image",
  name: 'moon_amm',
  version: '0.0.1', // default=latest
  networks: {
    testnet: {
      seed: 'draw ordinary company certain asthma ask napkin total famous turkey orange humor prosper alter strong',
    },

    mainnet: {
      seed: 'draw ordinary company certain asthma ask napkin total famous turkey orange humor prosper alter strong'
    },
    sandbox: {
      registry: 'localhost:5000',
      nodeAddress: 'https://hackathon.welocal.dev/node-0',
      seed: 'draw ordinary company certain asthma ask napkin total famous turkey orange humor prosper alter strong',
      params: {
        init: () => ({
            param: '${value}'
        })
      }
    }
  }
}