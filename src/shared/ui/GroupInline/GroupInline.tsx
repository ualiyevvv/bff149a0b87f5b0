import { classNames } from 'shared/lib/helpers/classNames';
import cls from 'shared/ui/GroupInline/GroupInline.module.scss';
import React from 'react';

interface GroupInlineProps {
    children?: React.ReactNode
    className?: string;
    isAlignStart?: boolean;
    isAlignCenter?: boolean;
    bottom?: number;
}

export const GroupInline = (props: GroupInlineProps) => {
    const {
        className,
        children,
        isAlignStart,
        isAlignCenter,
        bottom
    } = props;

    const style = {
        marginBottom: bottom
    }
    return (
        <div className={classNames(cls.GroupInline, { [cls['GroupInline--start']]: isAlignStart, [cls['GroupInline--center']]: isAlignCenter  }, [className])} style={style}>
            {children}
        </div>
    )
}
