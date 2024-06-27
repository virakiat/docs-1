// Utils for dealing with cointypes

import { convertEVMChainIdToCoinType } from 'ens-tools';

export const evmChainIdToCoinType = (chainId: bigint): bigint => {
    switch (chainId) {
        // Ethereum Mainnet
        case BigInt(60):
            return BigInt(60);
        // EOA Chain Id
        case BigInt(0):
            return BigInt(2_147_483_658);
        // Optimism Mainnet
        case BigInt(10):
            return BigInt(2_147_483_658);
        // Polygon
        case BigInt(137):
            return BigInt(2_147_483_785);
        // Base
        case BigInt(8453):
            return BigInt(2_147_492_101);
        // Arbitrum One
        case BigInt(42_161):
            return BigInt(2_147_525_809);
        default:
            return BigInt(convertEVMChainIdToCoinType(Number(chainId)));
    }
};

export const SLIP44 = {
    BTC: BigInt(0),
    SOL: BigInt(501),
    DOGE: BigInt(3),
    LTC: BigInt(2),
};

export const EVMChainIds = {
    '*Wildcard': BigInt(0),
    Ethereum: BigInt(60),
    EthereumClassic: BigInt(61),
    Optimism: BigInt(10),
    BNB: BigInt(56),
    Gnosis: BigInt(100),
    Polygon: BigInt(137),
    zkSync: BigInt(324),
    Mantle: BigInt(5000),
    Base: BigInt(8453),
    Linea: BigInt(59_144),
    ArbitrumOne: BigInt(42_161),
    Taiko: BigInt(167_000),
};
