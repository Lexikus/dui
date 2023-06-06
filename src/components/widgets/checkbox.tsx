import { JSX } from 'react';

type Theme = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
type Size = 'lg' | 'md' | 'sm' | 'xs';

export type CheckboxProps = {
    theme?: Theme;
    size?: Size;
    checked?: boolean;
}
export function Checkbox({ checked, theme, size }: CheckboxProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'checkbox-accent'; break;
            case 'primary': themeModifier = 'checkbox-primary'; break;
            case 'secondary': themeModifier = 'checkbox-secondary'; break;
            case 'accent': themeModifier = 'checkbox-accent'; break;
            case 'info': themeModifier = 'checkbox-info'; break;
            case 'success': themeModifier = 'checkbox-success'; break;
            case 'warning': themeModifier = 'checkbox-warning'; break;
            case 'error': themeModifier = 'checkbox-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'checkbox-lg'; break;
            case 'md': sizeModifier = 'checkbox-md'; break;
            case 'sm': sizeModifier = 'checkbox-sm'; break;
            case 'xs': sizeModifier = 'checkbox-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    return (
        <input type="checkbox" checked={checked} className={`checkbox ${themeModifier} ${sizeModifier}`} />
    );
}
