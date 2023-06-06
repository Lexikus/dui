'use client';
import { JSX, ReactNode } from 'react';

export function openDrawer(id: string): void {
    const drawer = document.getElementById(id) as HTMLInputElement;
    drawer.checked = true;
}

export function closeDrawer(id: string): void {
    const drawer = document.getElementById(id) as HTMLInputElement;
    drawer.checked = false;
}

type DrawerProps = {
    children: ReactNode;
    id: string;
    right?: boolean
}
export function Drawer({ children, id, right }: DrawerProps): JSX.Element {
    return (
        <div className={`drawer ${right && 'drawer-end'}`}>
            <input id={id} type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor={id} className="drawer-overlay"></label>
                <div className="h-full bg-base-200">
                    {children}
                </div>
            </div>
        </div>
    );
}