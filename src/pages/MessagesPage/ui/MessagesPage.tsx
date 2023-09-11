import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TabGroup } from 'shared/ui/Tabs/TabGroup';
import { Tab } from 'shared/ui/Tabs/Tab';
import {Conversations} from "widgets/Chat/Conversations";
import {Messenger} from "widgets/Chat/Messenger";

const MessagesPage = () => {
    const { t } = useTranslation()

    const [activeTab, setActiveTab] = useState('Private');

    const [activeConversationId, setActiveConversationId] = useState(null)

    const style = {
        display: 'flex'
    }
    return (
        <div>
            {/*{t('Сообщения страница')}*/}
            <section className="chat-page">
                <div className="chat-page__block">
                    <TabGroup>
                        <Tab label={'Private'} isActive={activeTab === 'Private'} onClick={ () => setActiveTab('Private')}/>
                        <Tab label={'Chat rooms'} isActive={activeTab === 'Rooms'} onClick={ () => setActiveTab('Rooms')}/>
                    </TabGroup>
                </div>
                <div className="chat-page__block" style={style}>
                    {activeTab === 'Private' &&
                        <Conversations conversationsType={'private'} onClick={() => setActiveConversationId} />
                    }
                    {activeTab === 'Rooms' &&
                        <Conversations conversationsType={'rooms'} />}

                    <Messenger conversationId={activeConversationId} />
                </div>
            </section>
        </div>
    )
}

export default MessagesPage
