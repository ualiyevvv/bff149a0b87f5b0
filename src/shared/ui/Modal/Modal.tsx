import React, {FC, ReactNode, useEffect, useRef} from 'react';

import styles from "./Modal.module.scss"
import {createPortal} from "react-dom";

interface ModalProps {
    children: ReactNode;
    onClose?: () => void;
    minWidth?: number;
    maxWidth?: number;
    height?: number;
}
const appRoot = document.getElementById('root');
export const Modal: FC<ModalProps> = (props) => {

    const {children, minWidth, maxWidth, height,onClose} = props;

    const style = {
        minWidth: minWidth,
        maxWidth: maxWidth,
        maxHeight: height
    }

    const modalRef = useRef(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return createPortal(<>
        <div className={styles.overlay}></div>
        <div ref={modalRef} className={styles.Modal} style={style}>
            {/*<div className={styles['Modal__nav']}>*/}
            {/*    <div className={styles['Modal__close']} onClick={onClose}>X</div>*/}
            {/*</div>*/}

            <div className={styles['Modal__content']}>
                {children}
            </div>
        </div>
    </>, appRoot);
}