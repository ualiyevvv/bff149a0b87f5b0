import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import styles from './ListVertical.module.scss';
import { classNames } from 'shared/lib/helpers/classNames'
// import CardShowAll from "../card_show_all/CardShowAll";

interface ListVerticalItemProps {
    children: ReactNode;
    title?: string;
}
export const ListVerticalItem: FC<ListVerticalItemProps> = (props) => {
    const { children, title } = props;


    return (<>
        <div className={styles.ListVerticalItem}>
            {children}
        </div>
    </>)
}
