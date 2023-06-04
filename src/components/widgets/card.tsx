'use client';

import { JSX, ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
}
export function Card({ children }: CardProps): JSX.Element {
    return (
        <div className={`shadow-xl card`}>
            {children}
        </div>
    )
}

type CardFigureProps = {
    children: ReactNode;
}
export function CardFigure({ children }: CardFigureProps): JSX.Element {
    return (
        <figure>
            {children}
        </figure>
    )
}

type CardBodyProps = {
    children: ReactNode;
}
export function CardBody({ children }: CardBodyProps): JSX.Element {
    return (
        <div className="card-body">
            {children}
        </div>
    )
}

type CardActionProps = {
    children: ReactNode;
}
export function CardAction({ children }: CardActionProps): JSX.Element {
    return (
        <div className="justify-end card-actions">
            {children}
        </div>
    )
}
