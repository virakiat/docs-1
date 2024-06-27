import { FC } from 'react';
import ReactModal from 'react-modal';

import { CoinTypeList } from './CoinTypeList';

// This component renders the coinlist out irregardless of the state such that it is always visible and static analyzers can pick it up.
export const CoinListModal: FC<{ open: boolean; onClose?: () => void }> = ({
    open,
    onClose,
}) => {
    return (
        <>
            {!open && (
                <div className="hidden">
                    <CoinTypeList />
                </div>
            )}
            {open && (
                <ReactModal
                    isOpen={open}
                    onAfterOpen={() => {
                        document.querySelector('html').style.overflow =
                            'hidden';
                    }}
                    onRequestClose={() => {
                        onClose?.();
                        // router.replace(pathname);
                    }}
                    onAfterClose={() => {
                        document.querySelector('html').style.overflow = 'auto';
                    }}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                    shouldFocusAfterRender={true}
                    shouldReturnFocusAfterClose={true}
                    style={{
                        overlay: {
                            backgroundColor: '',
                            backdropFilter: 'blur(14px)',
                            zIndex: 99,
                        },
                        content: {
                            width: '',
                            // maxWidth: '760px',
                            height: 'auto',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            background: 'transparent',
                            border: 'none',
                            padding: '4px',
                            inset: '2vw 2vw auto 2vw',
                            // inset: '40px 40px auto 40px',
                        },
                    }}
                >
                    <div className="border-ens-light-border bg-ens-light-background-primary dark:border-ens-dark-border not-prose mx-auto max-w-xl rounded-lg border p-4">
                        <CoinTypeList />
                    </div>
                </ReactModal>
            )}
        </>
    );
};
