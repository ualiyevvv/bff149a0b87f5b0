import React from 'react'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { classNames } from 'shared/lib/helpers/classNames'
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import BurgerIcon from "shared/assets/icons/burger-sidebar.svg";

interface NavbarProps {
    className?: string;
    onToggle?: () => void;
}

export const Navbar = ({ className, onToggle }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.navbar__burger)}>
                <Button theme={ThemeButton.ICONIC} onClick={onToggle}>
                    <BurgerIcon />
                </Button>
            </div>
            <ThemeSwitcher />
            <div className={cls.links}>
                <LangSwitcher/>
            </div>
        </div>
    )
}
