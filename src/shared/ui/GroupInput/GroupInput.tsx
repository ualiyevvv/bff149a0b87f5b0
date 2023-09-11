import cls from './GroupInput.module.scss'
import {FC, ReactNode, useState} from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

interface GroupInputProps {
    children: ReactNode;
    isMobile?: boolean;
    isAlignStart?: boolean;
    top?: number;
}

export const GroupInput: FC<GroupInputProps> = (props) => {

    const { children, isMobile, isAlignStart, top } = props;

    const style = {
        marginTop: top
    }
    return (
        <div className={classNames(cls.GroupInput, {
            [cls['GroupInput--mobile']]: isMobile,
            [cls['GroupInput--ais']]: isAlignStart
        }, [])} style={style}>
            {children}
        </div>
    )
}
