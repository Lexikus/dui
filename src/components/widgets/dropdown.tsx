'use client';
import { JSX, ReactNode } from 'react';
import { Button, type ButtonProps } from './button';

type Position = 'top' | 'left' | 'right' | 'bottom';
type Alignment = 'start' | 'end';

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
type DropdownToggleProps = Omit<ButtonProps, 'onClick'>;
export const DropdownToggle = (props: DropdownToggleProps) => <Button {...props} />;

type DropdownMenuProps = {
    children: ReactNode,
}
export function DropdownMenu({ children }: DropdownMenuProps): JSX.Element {
    return (
        <ul tabIndex={0} className="p-2 shadow dropdown-content menu bg-base-100 rounded-box min-w-[13rem]">
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