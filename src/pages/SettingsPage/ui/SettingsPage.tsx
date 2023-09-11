import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import {PersonalInfo} from "features/PersonalInfo/ui/PersonalInfo";

import {Block} from 'shared/ui/Block/Block'
import {TabGroup} from "shared/ui/Tabs/TabGroup";
import {Tab} from "shared/ui/Tabs/Tab";
import {Conversations} from "widgets/Chat/Conversations";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";
import {TeamateInfo} from "features/TeamateInfo/ui/TeamateInfo";
import {GeneralSettings} from "features/GeneralSettings/ui/GeneralSettings";
const SettingsPage = () => {
    const { t } = useTranslation()

    const [activeTab, setActiveTab] = useState('Profile');

    return (
        <div>
            <TabGroup>
                <Tab label={'Profile'} isActive={activeTab === 'Profile'} onClick={ () => setActiveTab('Profile')}/>
                <Tab label={'General'} isActive={activeTab === 'General'} onClick={ () => setActiveTab('General')}/>
            </TabGroup>
            {activeTab === 'Profile' &&
                <GroupInline isAlignStart={true}>
                    <Block width={'100%'} top={40} padding={20}>
                        <PersonalInfo />
                    </Block>
                    <Block width={'100%'} padding={20}>
                        <TeamateInfo />
                    </Block>
                </GroupInline>
            }
            {activeTab === 'General' &&
                <Block top={40} padding={20}>
                    <GeneralSettings />
                </Block>
            }
        </div>
    )
}

export default SettingsPage
