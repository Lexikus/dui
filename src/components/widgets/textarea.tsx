import { JSX } from 'react';

type Theme = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';
type Variant = 'bordered';
type Size = 'lg' | 'md' | 'sm' | 'xs';

export type TextareaProps = {
    theme?: Theme;
    size?: Size;
    variant?: Variant;
    placeholder?: string;
    labelTopLeft?: string;
    labelTopRight?: string;
    labelBottomLeft?: string;
    labelBottomRight?: string;
}
export function Textarea({ theme, size, variant, placeholder, labelTopLeft, labelTopRight, labelBottomLeft, labelBottomRight }: TextareaProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'textarea-accent'; break;
            case 'primary': themeModifier = 'textarea-primary'; break;
            case 'secondary': themeModifier = 'textarea-secondary'; break;
            case 'accent': themeModifier = 'textarea-accent'; break;
            case 'info': themeModifier = 'textarea-info'; break;
            case 'success': themeModifier = 'textarea-success'; break;
            case 'warning': themeModifier = 'textarea-warning'; break;
            case 'error': themeModifier = 'textarea-error'; break;
            case 'ghost': themeModifier = 'textarea-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'textarea-lg'; break;
            case 'md': sizeModifier = 'textarea-md'; break;
            case 'sm': sizeModifier = 'textarea-sm'; break;
            case 'xs': sizeModifier = 'textarea-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    let variantModifier: string = '';
    if (variant) {
        switch (variant) {
            case 'bordered': variantModifier = 'textarea-bordered'; break;
            default: throw new Error('unreachable - did you miss to add a variant?');
        }
    }

    if (!labelTopLeft && !labelTopRight && !labelBottomLeft && !labelBottomRight) {
        return (
            <textarea placeholder={placeholder} className={`textarea ${themeModifier} ${sizeModifier} ${variantModifier}`} />
        );
    }

    return (
        <div className="form-control">
            <label className="label">
                {labelTopLeft && <span className="label-text">{labelTopLeft}</span>}
                {labelTopRight && <span className="label-text-alt">{labelTopRight}</span>}
            </label>
            <textarea placeholder={placeholder} className={`textarea ${themeModifier} ${sizeModifier} ${variantModifier}`} />
            <label className="label">
                {labelBottomLeft && <span className="label-text-alt">{labelBottomLeft}</span>}
                {labelBottomRight && <span className="label-text-alt">{labelBottomRight}</span>}
            </label>
        </div>
    )
}
