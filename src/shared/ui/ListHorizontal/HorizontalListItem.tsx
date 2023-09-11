import styles from './horizontalList.module.scss';
import { classNames } from 'shared/lib/helpers/classNames'
import {FC, ReactNode} from 'react';

interface HorizontalListItemProps {
    children: ReactNode;
    isShowAll?: boolean;
}
export const HorizontalListItem: FC<HorizontalListItemProps> = (props) => {
    const {children, isShowAll} = props;
    return (<>
        <div className={classNames(styles.FriendCard, { [styles['HorizontalList-item--show-all']]: isShowAll }, [styles['HorizontalList-item']])}>
            {children}
        </div>
    </>)
}