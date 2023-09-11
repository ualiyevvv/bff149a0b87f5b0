import cls from './ToggleSwitch.module.scss'
import {FC, useState} from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

interface ToggleSwitchProps {
    isChecked?: boolean;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = (props) => {

    const {
        isChecked
    } = props;

    const [_isChecked, setIsChecked] = useState(isChecked);

    return (
        <label className={classNames(cls.switch)}>
            <input className={classNames(cls.ToggleSwitch)} type="checkbox" checked={_isChecked} onChange={() => setIsChecked(!_isChecked)} />
            <span className={classNames(cls.slider, {}, [cls.round])}></span>
        </label>
    )
}
