import { JSX } from 'react';

type Theme = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';
type Variant = 'bordered';
type Size = 'lg' | 'md' | 'sm' | 'xs';

export type InputProps = {
    theme?: Theme;
    size?: Size;
    variant?: Variant;
    placeholder?: string;
    labelTopLeft?: string;
    labelTopRight?: string;
    labelBottomLeft?: string;
    labelBottomRight?: string;
}
export function Input({ theme, size, variant, placeholder, labelTopLeft ,labelTopRight ,labelBottomLeft ,labelBottomRight }: InputProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'input-accent'; break;
            case 'primary': themeModifier = 'input-primary'; break;
            case 'secondary': themeModifier = 'input-secondary'; break;
            case 'accent': themeModifier = 'input-accent'; break;
            case 'info': themeModifier = 'input-info'; break;
            case 'success': themeModifier = 'input-success'; break;
            case 'warning': themeModifier = 'input-warning'; break;
            case 'error': themeModifier = 'input-error'; break;
            case 'ghost': themeModifier = 'input-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'input-lg'; break;
            case 'md': sizeModifier = 'input-md'; break;
            case 'sm': sizeModifier = 'input-sm'; break;
            case 'xs': sizeModifier = 'input-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    let variantModifier: string = '';
    if (variant) {
        switch (variant) {
            case 'bordered': variantModifier = 'input-bordered'; break;
            default: throw new Error('unreachable - did you miss to add a variant?');
        }
    }

    if (!labelTopLeft && !labelTopRight && !labelBottomLeft && !labelBottomRight) {
        return (
            <input type="text" placeholder={placeholder} className={`input ${themeModifier} ${sizeModifier} ${variantModifier}`} />
        );
    }

    return (
        <div className="form-control">
            <label className="label">
                {labelTopLeft && <span className="label-text">{labelTopLeft}</span>}
                {labelTopRight && <span className="label-text-alt">{labelTopRight}</span>}
            </label>
            <input type="text" placeholder={placeholder} className={`input ${themeModifier} ${sizeModifier} ${variantModifier}`} />
            <label className="label">
                {labelBottomLeft && <span className="label-text-alt">{labelBottomLeft}</span>}
                {labelBottomRight && <span className="label-text-alt">{labelBottomRight}</span>}
            </label>
        </div>
    )
}
