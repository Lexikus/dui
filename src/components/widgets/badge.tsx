'use client';

import { JSX, ReactNode } from 'react';
import { Size, Theme, VariantBadge } from './customization';
type BadgeProps = {
    children: ReactNode;
    theme?: Theme;
    size?: Size;
    variant?: VariantBadge;
}
export function Badge({ children, theme, size, variant }: BadgeProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'badge-accent'; break;
            case 'neutral': themeModifier = 'badge-neutral'; break;
            case 'primary': themeModifier = 'badge-primary'; break;
            case 'secondary': themeModifier = 'badge-secondary'; break;
            case 'accent': themeModifier = 'badge-accent'; break;
            case 'info': themeModifier = 'badge-info'; break;
            case 'success': themeModifier = 'badge-success'; break;
            case 'warning': themeModifier = 'badge-warning'; break;
            case 'error': themeModifier = 'badge-error'; break;
            case 'ghost': themeModifier = 'badge-ghost'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'badge-lg'; break;
            case 'md': sizeModifier = 'badge-md'; break;
            case 'sm': sizeModifier = 'badge-sm'; break;
            case 'xs': sizeModifier = 'badge-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    let variantModifier: string = '';
    if (variant) {
        switch (variant) {
            case 'outline': variantModifier = 'btn-outline'; break;
            default: throw new Error('unreachable - did you miss to add a variant?');
        }
    }

    return (
        <span className={`badge ${themeModifier} ${sizeModifier} ${variantModifier}`}>
            {children}
        </span>
    );
}