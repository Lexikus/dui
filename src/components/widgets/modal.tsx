'use client';

import React from 'react';
import { JSX, ReactNode } from 'react';
import Button, { ButtonProps } from './button';

type ModalProps = {
    id: string;
    children: ReactNode;
}
export function Modal({ id, children }: ModalProps): JSX.Element {
    const renderChildren = () => {
        return React.Children.map(children, (child: any) => {
            return React.cloneElement(child, {
                id,
            });
        });
    };
    return (
        <dialog id={id} className="modal">
            <form method="dialog" className="modal-box">
                {renderChildren()}
            </form>
        </dialog>
    )
}

type ModalBodyProps = {
    children: ReactNode;
    id?: string;
}
export function ModalBody({ children, id }: ModalBodyProps): JSX.Element {
    return (
        <>
            {children}
        </>
    );
}

type ModalActionProps = {
    children: ReactNode;
    id?: string;
}
export function ModalAction({ children, id }: ModalActionProps): JSX.Element {
    return (
        <div className="modal-action">
            {children}
        </div>
    )
}

type ModalToggleProps = Omit<ButtonProps, 'onClick'> & { id: string };
export const ModalToggle = ({ id, ...props }: ModalToggleProps): JSX.Element => <Button {...props} onClick={() => (window as any)[id]?.showModal()} />;