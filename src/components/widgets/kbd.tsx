'use client';
import { JSX, ReactNode } from 'react';
import { Size } from './customization';

type KbdProps = {
    children: ReactNode;
    size?: Size;
}
export function Kbd({ children, size }: KbdProps): JSX.Element {
    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'btn-lg'; break;
            case 'md': sizeModifier = 'btn-md'; break;
            case 'sm': sizeModifier = 'btn-sm'; break;
            case 'xs': sizeModifier = 'btn-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    return (
        <kbd className={`kbd ${sizeModifier}`}>{children}</kbd>
    )
}