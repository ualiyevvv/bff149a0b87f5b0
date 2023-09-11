import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames'

import cls from './Badge.module.scss'

interface BadgeProps {
    text?: string;
    isAir?: boolean;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}
export const Badge: FC<BadgeProps> = (props) => {
    const { top, bottom, right, left, isAir, text } = props;

    const style = {
        top,
        bottom,
        right,
        left
    }

    return (
        <div
            className={classNames(cls.Badge, { [cls['Badge--air']]: isAir }, [])}
            style={style}
        >
            {text}
        </div>
    );
}
