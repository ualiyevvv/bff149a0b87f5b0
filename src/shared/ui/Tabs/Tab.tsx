import cls from './Tabs.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

interface TabProps {
    label?: string;
    isActive?: boolean;
    onClick?: () => void;
}
export const Tab: FC<TabProps> = (props) => {
    const { label, isActive, onClick } = props;

    return (
        <div className={classNames(cls.Tabgroup__item, { [cls['Tabgroup__item--active']]: isActive }, [])} onClick={onClick}>
            { label }
        </div>
    )
}
