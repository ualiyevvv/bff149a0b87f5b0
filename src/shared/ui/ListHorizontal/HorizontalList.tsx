import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import styles from './horizontalList.module.scss';
import { classNames } from 'shared/lib/helpers/classNames'
import ForwardIcon from 'shared/assets/icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg'
import BackIcon from 'shared/assets/icons/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg'
import { HorizontalListItem } from './HorizontalListItem';
// import CardShowAll from "../card_show_all/CardShowAll";

interface HorizontalListProps {
    children: ReactNode;
    title?: string;
}
export const HorizontalList: FC<HorizontalListProps> = (props) => {
    const { children, title } = props;

    const divRef = useRef(null); // Reference to the div element
    const btnNextRef = useRef(null);
    const btnPrevRef = useRef(null);
    const [isScrolledByX, setIsScrolledByX] = useState(false);
    const [isScrolledByXDone, setIsScrolledByXDone] = useState(false);

    const [scrollAmount, setScrollAmount] = useState(null)
    useEffect(() => {
        const eventCardElement = document.querySelector('div[data-id="event-card"]') as HTMLElement;
        if (eventCardElement) {
            const width = eventCardElement.offsetWidth;
            setScrollAmount(width * 3)
        }
    })

    const handleScroll = () => {
        if (divRef.current.scrollLeft > 0) {
            setIsScrolledByX(true)
        } else {
            setIsScrolledByX(false)
        }

        if (Math.round(divRef.current.scrollLeft + divRef.current.clientWidth + 10) >= divRef.current.scrollWidth) {
            setIsScrolledByXDone(true)
        } else {
            setIsScrolledByXDone(false)
        }
    };

    function handleClickNext() {
        const divElement = divRef.current;
        if (divElement) {
            divElement.scrollLeft += scrollAmount;
        }
    };
    function handleClickPrev() {
        const divElement = divRef.current;
        if (divElement) {
            divElement.scrollLeft -= scrollAmount;
        }
    };

    return (<>
        <div className={styles.HorizontalList}>
            <div className={styles.HorizontalList__header}>
                {title && <div className={styles.HorizontalList__title}>{title}</div>}
                <div className={classNames(styles['HorizontalList-buttons'])}>
                    <button ref={btnPrevRef} className={`${!isScrolledByX && styles['HorizontalList-button--hidden']} ${styles['HorizontalList-button']} ${styles['HorizontalList-button--prev']}`} onClick={handleClickPrev}>
                        <BackIcon width={20} height={20} />
                    </button>
                    <button ref={btnNextRef} className={`${isScrolledByXDone && styles['HorizontalList-button--hidden']} ${styles['HorizontalList-button']} ${styles['HorizontalList-button--next']}`} onClick={handleClickNext}>
                        <ForwardIcon width={20} height={20} />
                    </button>
                </div>
            </div>
            <div ref={divRef} onScroll={handleScroll} className={styles.HorizontalList__items}>
                {children}
                {/*<HorizontalListItem isShowAll={true}>*/}
                {/*    show all*/}
                {/*    /!* <CardShowAll onClick={f=>f}/> *!/*/}
                {/*</HorizontalListItem>*/}
            </div>
        </div>
    </>)
}
