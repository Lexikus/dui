import { JSX, ReactNode } from 'react';

type CollapseProps = {
    children: ReactNode;
}
export function Collapse({ children }: CollapseProps): JSX.Element {
    return (
        <details className="collapse collapse-arrow">
            {children}
        </details>
    )
}

type CollapseTitleProps = {
    children: ReactNode;
}
export function CollapseTitle({ children }: CollapseTitleProps): JSX.Element {
    return (
        <summary className="collapse-title">{children}</summary>
    )
}

type CollapseBodyProps = {
    children: ReactNode;
}
export function CollapseBody({ children }: CollapseBodyProps): JSX.Element {
    return (
        <div className="collapse-content">
            {children}
        </div>
    )
}