import { JSX, ReactNode } from 'react';

type Theme = 'info' | 'success' | 'warning' | 'error';

type AlertProps = {
    children: ReactNode;
    theme?: Theme;
}
export function Alert({ children, theme }: AlertProps): JSX.Element {
    let themeModifier: string = '';
    if (theme) {
        switch (theme) {
            case 'info': themeModifier = 'alert-info'; break;
            case 'success': themeModifier = 'alert-success'; break;
            case 'warning': themeModifier = 'alert-warning'; break;
            case 'error': themeModifier = 'alert-error'; break;
            default: throw new Error('unreachable - did you miss to add a theme?');
        }
    }
    return (
        <div className={`alert ${themeModifier}`}>
            {children}
        </div>
    );
}

type AlertActionProps = {
    children: ReactNode;
}
export function AlertAction({ children }: AlertActionProps): JSX.Element {
    return (
        <div className="ml-auto">
            {children}
        </div>
    )
}