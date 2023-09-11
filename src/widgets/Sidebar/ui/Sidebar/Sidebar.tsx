import cls from './Sidebar.module.scss'
import React, {useState} from 'react'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import {classNames} from 'shared/lib/helpers/classNames'
import {GroupInline} from 'shared/ui/GroupInline/GroupInline';
import {Logo} from 'shared/ui/Logo/Logo';
import {useTranslation} from 'react-i18next';
import {Block, TypeAlignBlock} from 'shared/ui/Block/Block'
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Typography} from "shared/ui/Typography/Typography";
import {SidebarLink} from "shared/ui/SidebarLink/SidebarLink";

import MessagesIcon from 'shared/assets/icons/messages.svg'
import FriendsIcon from 'shared/assets/icons/friends.svg'
import FaqIcon from 'shared/assets/icons/faq.svg'
import RoomsIcon from 'shared/assets/icons/room.svg'
import SettingsIcon from 'shared/assets/icons/settings.svg'
import BurgerIcon from 'shared/assets/icons/burger-sidebar.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t, i18n } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <GroupInline>
                <div className={classNames(cls.Sidebar__block, { [cls['Sidebar__block--dnone']]: collapsed }, [className])}>
                    <Logo />
                </div>
                <Button theme={ThemeButton.ICONIC} onClick={onToggle}>
                    <BurgerIcon />
                </Button>
            </GroupInline>

            <div className={classNames(cls.Sidebar__block, { [cls['Sidebar__block--collapsed']]: collapsed }, [className])}>
                <Block align={TypeAlignBlock.START} top={64}>
                    <Avatar size={120} bottom={16}/>
                    <Typography size={20} weight={600} bottom={2} text={'Omar Moldashev'}/>
                    <Typography size={20} weight={400} text={'omar@gmail.com'}/>
                </Block>
            </div>
            <div className={cls.links}>
                <SidebarLink Icon={<MessagesIcon/>} extended={!collapsed} pushes={0} to={'/'} label={t('Главная')}/>
                <SidebarLink Icon={<MessagesIcon/>} extended={!collapsed} pushes={12345234} to={'/messages'} label={t('Сообщения')}/>
                <SidebarLink Icon={<FriendsIcon/>} extended={!collapsed} pushes={11} to={'/friends'} label={t('Друзья')}/>
                <SidebarLink Icon={<RoomsIcon/>} extended={!collapsed} pushes={0} to={'/rooms'} label={t('Rooms')}/>
                <SidebarLink Icon={<SettingsIcon/>} extended={!collapsed} pushes={0} to={'/settings'} label={t('Настройки')}/>
                <SidebarLink Icon={<FaqIcon/>} extended={!collapsed} pushes={0} to={'/faq'} label={t('FAQ')}/>
            </div>
        </div>
    )
}
