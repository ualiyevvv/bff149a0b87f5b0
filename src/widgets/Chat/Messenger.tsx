import cls from './Conversations.module.scss'
import { classNames } from 'shared/lib/helpers/classNames'
import React, {FC, ReactNode, useState} from 'react';
import {Recipient} from "shared/ui/Chat/Recipient";
import {Avatar} from "shared/ui/Avatar/Avatar";
interface MessengerProps {
    // children: ReactNode;
    conversationId?: number;
}
export const Messenger: FC<MessengerProps> = (props) => {

    const {conversationId} = props;

    const [conversations, setConversations] = useState([1,2,3,4,5,5,6]);

    return (
        <div className={classNames(cls.Messenger, { }, [])}>
            <div className={classNames(cls.Messenger__topbar, { }, [])}>
                <div className={classNames(cls.Messenger__info, { }, [])}>
                    <Avatar size={56} right={16}/>
                    {/*<div className="chat-conversation__avatar">*/}
                    {/*    <img src="" alt=""/>*/}
                    {/*</div>*/}
                    <div className={classNames(cls.Messenger__name, { }, [])}>
                        Aigerim Maxutova
                        <div className={classNames(cls.Messenger__lastseen, { }, [])}>
                            16:59
                        </div>
                    </div>
                </div>
                <div className={classNames(cls.Messenger__tools, { }, [])}>
                    <span>
                        tool1
                    </span>
                    <span>
                        tool2
                    </span>
                    <span>
                        tool3
                    </span>
                </div>
            </div>
            <div className={classNames(cls.Messenger__messages, { }, [])}>

            </div>
            <div className={classNames(cls.Messenger__bottombar, { }, [])}>

            </div>
        </div>
    )
}
