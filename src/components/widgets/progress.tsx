"use client";
import { JSX, ReactNode } from 'react';
import { ProgressTheme } from './customization';

type ProgressProps = {
    value: number;
    max: number;
    theme?: ProgressTheme;
}
export function Progress({ value, max, theme }: ProgressProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'progress-accent'; break;
            case 'primary': themeModifier = 'progress-primary'; break;
            case 'secondary': themeModifier = 'progress-secondary'; break;
            case 'accent': themeModifier = 'progress-accent'; break;
            case 'info': themeModifier = 'progress-info'; break;
            case 'success': themeModifier = 'progress-success'; break;
            case 'warning': themeModifier = 'progress-warning'; break;
            case 'error': themeModifier = 'progress-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    return (
        <progress className={`progress ${themeModifier}`} value={value} max={max}></progress>
    );
}