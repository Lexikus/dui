import { JSX, ReactNode } from 'react';

type JoinProps = {
    children: ReactNode;
}
export function Join({ children }: JoinProps): JSX.Element {
    return (
        <div className="join">
            {children}
        </div>
    );
}

type JoinItemProps = {
    children: ReactNode;
}
export function JoinItem({ children }: JoinItemProps): JSX.Element {
    return (
        <div className="join-item">
            {children}
        </div>
    );
}