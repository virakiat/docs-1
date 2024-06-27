'use client';

import { FC, useState } from 'react';

import { Button } from '../Button';
import { CoinListModal } from './CoinListModal';

export const ViewListButton: FC = () => {
    const [showList, setShowList] = useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    console.log('View List');
                    setShowList(true);
                }}
            >
                View List
            </Button>
            <CoinListModal
                open={showList}
                onClose={() => {
                    setShowList(false);
                }}
            />
        </>
    );
};
