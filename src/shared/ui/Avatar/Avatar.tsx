import cls from './Avatar.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

interface AvatarProps {
    size?: number;
    right?: number;
    bottom?: number;
}
export const Avatar: FC<AvatarProps> = (props) => {
    const { size,right,bottom } = props;

    const style = {
        width: size,
        height: size,
        marginRight: right,
        marginBottom: bottom
    }

    return (
        <div className={classNames(cls.Avatar, { }, [])} style={style} >
        </div>
    )
}
