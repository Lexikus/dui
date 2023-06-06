'use client';

import { JSX, ReactNode } from 'react';

type State = 'active' | 'disabled'
type Theme = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';
type Variant = 'outline' | 'link';
type Size = 'lg' | 'md' | 'sm' | 'xs';
type Shape = 'circle' | 'square';
type Expand = 'wide' | 'block';
type Effect = 'glass';

export type ButtonProps = {
    children: ReactNode,
    type?: 'button' | 'submit';
    state?: State;
    theme?: Theme;
    variant?: Variant;
    size?: Size;
    shape?: Shape
    expand?: Expand,
    effect?: Effect,
    noAnimation?: boolean;
    loading?: boolean
    onClick?: () => void;
}
export function Button({ children, type = 'button', loading, noAnimation, theme, state, variant, effect, expand, shape, size, onClick }: ButtonProps): JSX.Element {
    const noAnimationModifier = noAnimation ? 'no-animation' : '';

    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'accent': themeModifier = 'btn-accent'; break;
            case 'neutral': themeModifier = 'btn-neutral'; break;
            case 'primary': themeModifier = 'btn-primary'; break;
            case 'secondary': themeModifier = 'btn-secondary'; break;
            case 'accent': themeModifier = 'btn-accent'; break;
            case 'info': themeModifier = 'btn-info'; break;
            case 'success': themeModifier = 'btn-success'; break;
            case 'warning': themeModifier = 'btn-warning'; break;
            case 'error': themeModifier = 'btn-error'; break;
            case 'ghost': themeModifier = 'btn-ghost'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }

    let stateModifier: string = '';
    if (state) {
        switch (state) {
            case 'active': stateModifier = 'btn-active';  break;
            case 'disabled': stateModifier = 'btn-disabled'; break;
            default: throw new Error('unreachable - did you miss to add a state?');
        }
    }

    let variantModifier: string = '';
    if (variant) {
        switch (variant) {
            case 'link': variantModifier = 'btn-link'; break;
            case 'outline': variantModifier = 'btn-outline'; break;
            default: throw new Error('unreachable - did you miss to add a variant?');
        }
    }

    let effectModifier: string = '';
    if (effect) {
        switch (effect) {
            case 'glass': effectModifier = 'glass'; break;
            default: throw new Error('unreachable - did you miss to add a effect?');
        }
    }

    let expandModifier: string = '';
    if (expand) {
        switch (expand) {
            case 'block': expandModifier = 'btn-block'; break;
            case 'wide': expandModifier = 'btn-wide'; break;
            default: throw new Error('unreachable - did you miss to add a expand?');
        }
    }

    let shapeModifier: string = '';
    if (shape) {
        switch (shape) {
            case 'circle': shapeModifier = 'btn-circle'; break;
            case 'square': shapeModifier = 'btn-square'; break;
            default: throw new Error('unreachable - did you miss to add a shape?');
        }
    }

    let sizeModifier: string = '';
    if (size) {
        switch (size) {
            case 'lg': sizeModifier = 'btn-lg'; break;
            case 'md': sizeModifier = 'btn-md'; break;
            case 'sm': sizeModifier = 'btn-sm'; break;
            case 'xs': sizeModifier = 'btn-xs'; break;
            default: throw new Error('unreachable - did you miss to add a size?');
        }
    }

    return (
        <button type={type} onClick={e => onClick && onClick()} className={`btn ${themeModifier} ${noAnimationModifier} ${stateModifier} ${variantModifier} ${effectModifier} ${expandModifier} ${shapeModifier} ${sizeModifier}`}>
            {loading && <span className="loading loading-spinner"></span>}
            {children}
        </button>
    );
}
