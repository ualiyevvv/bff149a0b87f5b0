import cls from './Search.module.scss'
import React, { FC, useState, useEffect, useRef, MouseEvent } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import SearchIcon from 'shared/assets/icons/search.svg'

interface SearchProps {
    // isActive?: boolean;
    value?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = (props) => {

    const {value ,name,placeholder,required, onChange } = props;

    const [isActive, setIsActive] = useState(false);

    // если поле пустое то при клике не на поле поиск, сворачивать его; если поле не пустое при клике не на поиск то не сворачивать
    const inputRef = useRef(null);
    function onClick (e: MouseEvent <HTMLDivElement>) {
        // setIsActive(!isActive)
        // подкорректировать код (не отлавливает клик вне элемента)
        if (inputRef.current && !inputRef.current.contains(e.target)
            // && value === ''
        ) {
            setIsActive(!isActive);
        }
        console.log('CLICK', value)
        // if (isActive) {
        //     if (inputRef.current) {
        //         inputRef.current.focus();
        //     }
        // }
    }
    // useEffect(() => {
    //     if () {
    //     }
    // }, [value]);
    return (
        <div className={classNames(cls.Search__wrapper, { }, [])}>
            <input
                className={classNames(cls.Search, { [cls['Search--active']]: isActive }, [])}
                name={name}
                placeholder={placeholder}
                type={'text'}
                value={value}
                onChange={onChange}
                required={required}
                ref={inputRef}
            />
            <div className={classNames(cls.Search__icon)} onClick={onClick}>
                <SearchIcon />
            </div>
        </div>
    )
}
