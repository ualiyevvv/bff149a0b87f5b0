import {FC, ReactNode} from 'react'
import cls from './Grid.module.scss'
import {classNames} from "shared/lib/helpers/classNames";

interface GridProps {
    children: ReactNode;
}

export const Grid: FC<GridProps> = (props) => {
    const { children } = props;
    // hard style css, media queries is not working, 'cause I have removed style attribute
    // const style = {
    //     position: 'relative',
    //     display: 'grid',
    //     gridColumnGap: columnGap,
    //     gridRowGap: rowGap,
    //     gridTemplateColumns: 'repeat('+repeat+', minmax(0, 1fr))',
    // }

    return (
        <div className={classNames(cls.Grid)} >
            {children}
        </div>
    )
}
