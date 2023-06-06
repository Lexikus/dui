import { JSX, ReactNode } from 'react';

type HDividerProps = {
    children: ReactNode;
}
export function Divider({ children }: HDividerProps): JSX.Element {
    return (
        <div className="divider">
            {children}
        </div>
    );
}

type DividerProps = {
    children: ReactNode;
}
export function HDivider({ children }: DividerProps): JSX.Element {
    return (
        <div className="divider divider-horizontal">
            {children}
        </div>
    );
}