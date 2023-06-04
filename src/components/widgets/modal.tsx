'use client';

import { JSX, ReactNode } from 'react';

export function openModal(id: string): void {
    (window as any)[id]?.showModal()
}

export function closeModal(id: string): void {
    (window as any)[id]?.close()
}

type ModalProps = {
    children: ReactNode;
    id: string;
    backdrop?: boolean
}
export function Modal({ children, id, backdrop }: ModalProps): JSX.Element {
    return (
        <dialog id={id} className="modal">
            <form method="dialog" className="modal-box">
                {children}
            </form>
            {
                backdrop &&
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            }
        </dialog>
    )
}

type ModalBodyProps = {
    children: ReactNode;
}
export function ModalBody({ children }: ModalBodyProps): JSX.Element {
    return (
        <>
            {children}
        </>
    );
}

type ModalActionProps = {
    children: ReactNode;
}
export function ModalAction({ children }: ModalActionProps): JSX.Element {
    return (
        <div className="modal-action">
            {children}
        </div>
    )
}
