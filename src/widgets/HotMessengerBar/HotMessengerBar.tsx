import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";
import {Avatar} from "shared/ui/Avatar/Avatar";
import cls from './HotMessengerBar.module.scss'
import {classNames} from "shared/lib/helpers/classNames";

import MessegesIcon from 'shared/assets/icons/messegesBlack.svg'

export const HotMessengerBar = () => {
    return (
        <div className={classNames(cls.HotMessengerBar)}>
            <div className={classNames(cls.HotMessengerBar__block)}>
                <Button theme={ThemeButton.ICONIC}><MessegesIcon /></Button>
            </div>
            <Block width={'100%'} align={TypeAlignBlock.CENTER}>
                <Avatar size={48} bottom={24} />
                <Avatar size={48} bottom={24} />
                <Avatar size={48} bottom={24} />
                <Avatar size={48} bottom={24} />
                <Avatar size={48} bottom={24} />
                <Avatar size={48} bottom={24} />
            </Block>
        </div>
    )
}
