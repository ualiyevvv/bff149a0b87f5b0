import cls from './Card.module.scss'
import { FC,ReactNode } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

interface CardProps {
    children: ReactNode;
    width?: string;
    padding?: string;
    top?: number;
}
export const Card: FC<CardProps> = (props) => {
    const { children, width, padding, top} = props;

    const style = {
        padding
    }

    return (
        <div className={classNames(cls.Card, { }, [])} style={style} data-id="event-card">
            { children }
        </div>
    )
}
