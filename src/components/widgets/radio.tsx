import { JSX } from 'react';

type Theme = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
type Size = 'lg' | 'md' | 'sm' | 'xs';

export type RadioProps = {
    theme?: Theme;
    size?: Size;
    checked?: boolean;
}
export function Radio({ checked, theme, size }: RadioProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'radio-accent'; break;
            case 'primary': themeModifier = 'radio-primary'; break;
            case 'secondary': themeModifier = 'radio-secondary'; break;
            case 'accent': themeModifier = 'radio-accent'; break;
            case 'info': themeModifier = 'radio-info'; break;
            case 'success': themeModifier = 'radio-success'; break;
            case 'warning': themeModifier = 'radio-warning'; break;
            case 'error': themeModifier = 'radio-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'radio-lg'; break;
            case 'md': sizeModifier = 'radio-md'; break;
            case 'sm': sizeModifier = 'radio-sm'; break;
            case 'xs': sizeModifier = 'radio-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    return (
        <input type="radio" checked={checked} className={`radio ${themeModifier} ${sizeModifier}`} />
    );
}
