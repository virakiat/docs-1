'use client';

import { FC } from 'react';
import { FiChevronDown, FiDownload, FiFile } from 'react-icons/fi';

import { EVMChainIds, evmChainIdToCoinType, SLIP44 } from '#/data/cointypes';

export const CoinTypeList: FC = () => {
    return (
        <div>
            {/* <h2>CoinType List</h2>
            <p>
                This is a list of some of the more popular chains and their
                corresponding coin type
            </p> */}
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="flex items-center gap-2 justify-between">
                            <span>Coin Type</span>
                            {/* TODO: Add download button */}
                            {/* <a href="" className="btn-subtle">
                                <FiFile />
                            </a> */}
                        </th>
                    </tr>
                </thead>
                <tbody>
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
                                <td className="flex items-center gap-1">
                                    {/* {short.startsWith('evm') && (
                                            <FaEthereum />
                                        )} */}
                                    <span>{name}</span>
                                </td>
                                <td>{value.toString()}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="bg-ens-light-background-primary relative z-0 -my-2 mb-4 rounded-b-lg border-x border-b px-4 pt-2">
                <div className="z-40 flex flex-col items-center justify-center py-1 md:flex-row">
                    <span>Expand</span>
                    <FiChevronDown />
                    {/* <span className="z-50">
                        ... and many many more following
                        [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)
                        and [ENSIP-11](/ensip/11)
                    </span> */}
                </div>
            </div>

            <span>*wildcard is still under development</span>
        </div>
    );
};
