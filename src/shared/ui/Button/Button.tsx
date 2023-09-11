import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    CONTAINED = 'contained',
    CLASSIC = 'classic',
    ICONIC = 'iconic',
    CARDIC = 'cardic',
}

export enum WidthButton {
    FULL = 'full',
    FIT = 'fit',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    width?: WidthButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        width,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, { [cls[theme]]: true }, [className, cls[width]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
