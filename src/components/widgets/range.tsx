import { JSX } from 'react';

type Theme = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
type Size = 'lg' | 'md' | 'sm' | 'xs';

export type RangeProps = {
    min: number;
    max: number;
    theme?: Theme;
    size?: Size;
    checked?: boolean;
}
export function Range({ min, max, theme, size }: RangeProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'range-accent'; break;
            case 'primary': themeModifier = 'range-primary'; break;
            case 'secondary': themeModifier = 'range-secondary'; break;
            case 'accent': themeModifier = 'range-accent'; break;
            case 'info': themeModifier = 'range-info'; break;
            case 'success': themeModifier = 'range-success'; break;
            case 'warning': themeModifier = 'range-warning'; break;
            case 'error': themeModifier = 'range-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'range-lg'; break;
            case 'md': sizeModifier = 'range-md'; break;
            case 'sm': sizeModifier = 'range-sm'; break;
            case 'xs': sizeModifier = 'range-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    return (
        <input type="range" min={min} max={max} className={`range ${themeModifier} ${sizeModifier}`} />
    );
}
