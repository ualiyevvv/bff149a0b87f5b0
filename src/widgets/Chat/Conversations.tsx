import cls from './Conversations.module.scss'
import { classNames } from 'shared/lib/helpers/classNames'
import {FC, ReactNode, useState} from 'react';
import {Recipient} from "shared/ui/Chat/Recipient";
interface ConversationsProps {
    // children: ReactNode;
    conversationsType?: string;
    onClick?: () => void;
}
export const Conversations: FC<ConversationsProps> = (props) => {

    const {conversationsType, onClick} = props;

    const [conversations, setConversations] = useState([1,2,3,4,5,5,6]);

    if (conversationsType === 'rooms') return;

    return (
        <div className={classNames(cls.Conversations, { }, [])}>
            {conversations.map((conversation, index) => {
                return (
                    <Recipient key={index} name={'Aigerim Maxutova'} content={'Can we skip to the good part?'} time={'16:59'} unread={true} onClick={onClick}/>
                )
            })}
        </div>
    )
}
