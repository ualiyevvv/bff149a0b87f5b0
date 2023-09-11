import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TabGroup } from 'shared/ui/Tabs/TabGroup';
import { Tab } from 'shared/ui/Tabs/Tab';
import {GroupInline} from "shared/ui/GroupInline/GroupInline";
import {Block} from "shared/ui/Block/Block";
import {PersonalInfo} from "features/PersonalInfo/ui/PersonalInfo";
import {TeamateInfo} from "features/TeamateInfo/ui/TeamateInfo";
import {DontHaveCreatedRooms} from "widgets/DontHaveCreatedRooms/DontHaveCreatedRooms";
import {DontHaveRooms} from "widgets/DontHaveRooms/DontHaveRooms";

const RoomsPage = () => {
    const { t } = useTranslation()

    const [activeTab, setActiveTab] = useState('My rooms');

    return (
        <>
            <TabGroup>
                <Tab label={'My rooms'} isActive={activeTab === 'My rooms'} onClick={ () => setActiveTab('My rooms')}/>
                <Tab label={'All rooms'} isActive={activeTab === 'All rooms'} onClick={ () => setActiveTab('All rooms')}/>
            </TabGroup>
            {activeTab === 'My rooms' &&
                <DontHaveCreatedRooms />
            }
            {activeTab === 'All rooms' &&
                <DontHaveRooms />
            }
        </>
    )
}

export default RoomsPage
