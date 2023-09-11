import cls from './Chat.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

interface RecipientProps {
    avatarImageSrc?: string;
    name?: string;
    time?: string;
    content?: string;
    unread?: boolean;
    onClick?: () => void;
}
export const Recipient: FC<RecipientProps> = (props) => {
    const { avatarImageSrc, name, time, content, unread } = props;

    return (
        <div className={classNames(cls.Recipient, { unread }, [])}>
            <div className={classNames(cls.Recipient__avatar, { }, [])}>
                <img src={avatarImageSrc} alt=""/>
            </div>
            <div className={classNames(cls.Recipient__info, { }, [])}>
                <div className={classNames(cls.Recipient__name, { }, [])}>
                    {name}
                    <div className={classNames(cls.Recipient__time, { }, [])}>
                        {time}
                    </div>
                </div>
                <div className={classNames(cls.Recipient__content, { }, [])}>
                    {content}
                </div>
            </div>
        </div>
    )
}
