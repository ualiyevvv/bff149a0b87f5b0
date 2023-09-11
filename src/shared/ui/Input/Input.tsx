import cls from './Input.module.scss'
import {FC, useState} from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

import EyeOffIcon from 'shared/assets/icons/visibility_off_FILL0_wght400_GRAD0_opsz48.svg';
import EyeIcon from 'shared/assets/icons/visibility_FILL0_wght400_GRAD0_opsz48.svg'
interface InputProps {
    placeholder?: string;
    onChange?: () => void;
    value?: string;
    label?: string;
    subtext?: string;
    name?: string;
    type?: string;
    required?: boolean;
    error?: string;
    isGroup?: boolean;
}

export const Input: FC<InputProps> = (props) => {

    const {isGroup, error, label, subtext, type, name, placeholder, onChange, value, required } = props;

    const [_type, setType] = useState(type);

    function handleToggle () {
        if (type === 'password') {
            _type === 'password' ? setType('text') : setType('password');
        }
    }
    return (
        <div className={classNames(cls.Input__wrapper, { [cls['Input__wrapper--group']]: isGroup }, [])}>
            {label &&
                <label className={classNames(cls.Input__label, { }, [])}>
                    {label}
                </label>
            }
            <input
                className={classNames(cls.Input, { }, [])}
                name={name}
                placeholder={placeholder}
                type={_type}
                value={value}
                onChange={onChange}
                required={required}
            />
            {type === 'password' && <>
                <span className={classNames(cls.Input__icon, { [cls.InputError]: error }, [])} onClick={handleToggle}>
                    {_type === 'password' ? <EyeOffIcon/> : <EyeIcon/>}
                </span>
            </>}
            {subtext &&
                <div className={classNames(cls.Input__subtext, { [cls.Input__subtextError]: error }, [])}>
                    {subtext}
                </div>
            }
        </div>
    )
}
