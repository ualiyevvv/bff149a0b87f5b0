import { classNames } from 'shared/lib/helpers/classNames'
import cls from './SidebarLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import {FC, ReactNode} from 'react'

import ArrowRightIcon from 'shared/assets/icons/direction right.svg'

interface SidebarLinkProps {
    Icon?: ReactNode;
    extended?: boolean;
    pushes?: number;
    label?: string;
    to?: string;
}

export const SidebarLink: FC<SidebarLinkProps> = (props) => {
    const {
        Icon,
        pushes,
        extended,
        label,
        to
    } = props

    return (
        <a className={classNames(cls.SidebarLink__href)} href={to}>
            <div className={classNames(cls.SidebarLink)}>
                <span className={classNames(cls.SidebarLink__block)}>
                    <span className={classNames(cls.SidebarLink__icon)}>{ Icon}</span>
                    {extended && label}
                </span>
                {extended &&
                    <span>
                        {pushes > 0
                            ? <span className={classNames(cls.SidebarLink__pushes)}>{pushes}</span>
                            : <ArrowRightIcon />
                        }
                    </span>
                }
            </div>
        </a>
    )
}
