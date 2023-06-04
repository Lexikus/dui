"use client";
import { JSX, ReactNode } from 'react';

type AccordionProps = {
    children: ReactNode;
    id: string;
}
export function Accordion({ children, id }: AccordionProps): JSX.Element {
    return (
        <div className="collapse collapse-arrow">
            <input type="radio" name={id} />
            {children}
        </div>
    )
}

type AccordionTitleProps = {
    children: ReactNode;
}
export function AccordionTitle({ children }: AccordionTitleProps): JSX.Element {
    return (
        <div className="collapse-title">
            {children}
        </div>
    )
}

type AccordionBodyProps = {
    children: ReactNode;
}
export function AccordionBody({ children }: AccordionBodyProps): JSX.Element {
    return (
        <div className="collapse-content">
            {children}
        </div>
    )
}