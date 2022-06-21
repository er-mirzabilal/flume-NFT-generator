export const collectionStatus = {
    PENDING: 'PENDING',
    GENERATING: 'GENERATING',
    GENERATED: 'GENERATED',
    FINILIZING: 'FINILIZING',
    FINALIZED: 'FINALIZED',
    PINNING: 'PINNING',
}

export  const contract_map = {
    4: {
        address:"0x742827F9a7c05F6c2a5D683c97a0b44010519ACB",
        name : "Rinkeby",
        unit: "ETH"
        },
    80001: {
            address: '0x520F883aBa11d5B3fa63e3e72a94Bd553bdd70A6',
            name: 'Matic testnet',
            unit: 'MATIC'
        },
    137: {
        address: '0x425Ed153Be3Fde8973f0d11c1F0058724cBc4Df9',
        name: 'Matic mainnet',
        unit: 'MATIC'
    }
}

