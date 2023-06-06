import { JSX } from 'react';

type Theme = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
type Size = 'lg' | 'md' | 'sm' | 'xs';

export type ToggleProps = {
    theme?: Theme;
    size?: Size;
    checked?: boolean;
}
export function Toggle({ checked, theme, size }: ToggleProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'toggle-accent'; break;
            case 'primary': themeModifier = 'toggle-primary'; break;
            case 'secondary': themeModifier = 'toggle-secondary'; break;
            case 'accent': themeModifier = 'toggle-accent'; break;
            case 'info': themeModifier = 'toggle-info'; break;
            case 'success': themeModifier = 'toggle-success'; break;
            case 'warning': themeModifier = 'toggle-warning'; break;
            case 'error': themeModifier = 'toggle-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'toggle-lg'; break;
            case 'md': sizeModifier = 'toggle-md'; break;
            case 'sm': sizeModifier = 'toggle-sm'; break;
            case 'xs': sizeModifier = 'toggle-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    return (
        <input type="checkbox" checked={checked} className={`toggle ${themeModifier} ${sizeModifier}`} />
    );
}
