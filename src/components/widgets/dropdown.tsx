'use client';

import { JSX, ReactNode } from 'react';
import Button from './button';
import { Alignment, Position } from './customization';

type DropdownProps = {
    children: ReactNode;
    position?: Position;
    align?: Alignment;
}
export function Dropdown({ children, position, align }: DropdownProps): JSX.Element {
    let positionModifier: string = '';
    if (position) {
        switch (position) {
            case 'top': positionModifier = 'dropdown-top'; break;
            case 'right': positionModifier = 'dropdown-right'; break;
            case 'bottom': positionModifier = 'dropdown-bottom'; break;
            case 'left': positionModifier = 'dropdown-left'; break;
            default: throw new Error('unreachable - did you miss to add a position?');
        }
    }

    let alignModifier: string = '';
    if (align) {
        switch (align) {
            case 'start': alignModifier = ''; break;
            case 'end': alignModifier = 'dropdown-end'; break;
            default: throw new Error('unreachable - did you miss to add a align?');
        }
    }

    return (
        <div className={`dropdown ${positionModifier} ${alignModifier}`} >
            {children}
        </div>
    )
}

export const DropdownToggle = Button;

type DropdownMenuProps = {
    children: ReactNode,
}
export function DropdownMenu({ children }: DropdownMenuProps): JSX.Element {
    return (
        <ul tabIndex={0} className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52">
            {children}
        </ul>
    )
}

type DropdownItemProps = {
    children: ReactNode,
}
export function DropdownItem({ children }: DropdownItemProps): JSX.Element {
    return (
        <li>{children}</li>
    )
}