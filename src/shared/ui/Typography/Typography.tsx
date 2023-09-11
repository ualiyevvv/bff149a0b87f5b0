import cls from './Typography.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

interface TypographyProps {
    text?: string;
    size?: number;
    weight?: number;
    color?: string;
    bottom?: number;
    left?: number;
    align?: string;
}
export const Typography: FC<TypographyProps> = (props) => {
    const { text,size,weight,color,bottom ,align,left } = props;

    const style = {
        fontSize: size,
        fontWeight: weight,
        color,
        marginBottom: bottom,
        marginLeft: left,
        'text-align': align
        // textAlign: align
    }

    return (
        <div className={classNames(cls.Typography, { }, [])} style={style} >
            { text }
        </div>
    )
}
