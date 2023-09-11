import cls from './Tabs.module.scss'
import { classNames } from 'shared/lib/helpers/classNames'

import { FC, ReactNode } from 'react';
interface TabGroupProps {
    children?: ReactNode;
}
export const TabGroup: FC<TabGroupProps> = ({ children }) => {
    return (
        <div className={classNames(cls.TabGroup, { }, [])}>
            {children}
        </div>
    )
}
