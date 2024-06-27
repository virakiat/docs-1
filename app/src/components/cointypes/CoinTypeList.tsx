import { FC } from 'react';

import { EVMChainIds, evmChainIdToCoinType, SLIP44 } from '#/data/cointypes';

export const CoinTypeList: FC = () => {
    return (
        <div>
            <h2>CoinType List</h2>
            <p>
                This is a list of some of the more popular chains and their
                corresponding coin type
            </p>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Coin Type</th>
                    </tr>
                </thead>
                {(
                    [
                        ['Bitcoin', SLIP44.BTC],
                        ['Litecoin', SLIP44.LTC],
                        ['Dogecoin', SLIP44.DOGE],
                        ['Solana', SLIP44.SOL],
                        ...Object.entries(EVMChainIds).map(
                            ([name, value]: [string, bigint]) => [
                                `${name} (EVM ${value})`,
                                evmChainIdToCoinType(value),
                            ]
                        ),
                    ] as [string, bigint][]
                )
                    .sort((a, b) => Number(a[1] - b[1]))
                    .map(([name, value]: [string, bigint]) => (
                        <tr key={value}>
                            <td>{name}</td>
                            <td>{value.toString()}</td>
                        </tr>
                    ))}
            </table>

            <span>*wildcard is still under development</span>
        </div>
    );
};
