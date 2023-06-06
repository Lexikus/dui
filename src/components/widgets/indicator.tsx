import { JSX, ReactNode } from 'react';

type IndicatorProps = {
    children: ReactNode;
}
export function Indicator({ children }: IndicatorProps): JSX.Element {
    return (
        <div className="indicator">
            {children}
        </div>
    );
}

type IndicatorItemProps = {
    children: ReactNode;
}
export function IndicatorItem({ children }: IndicatorItemProps): JSX.Element {
    return (
        <div className="indicator-item">
            {children}
        </div>
    );
}

type IndicatorBodyProps = {
    children: ReactNode;
}
export function IndicatorBody({ children }: IndicatorBodyProps): JSX.Element {
    return (<>
        {children}
    </>);
}