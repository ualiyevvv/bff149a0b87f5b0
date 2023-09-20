import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import {DontHaveFriends} from "widgets/DontHaveFriends/DontHaveFriends";
import {HorizontalList} from "shared/ui/ListHorizontal/HorizontalList";
import {HorizontalListItem} from "shared/ui/ListHorizontal/HorizontalListItem";
import {FriendCard} from "widgets/FriendCard/FriendCard";
import {ListVertical} from "shared/ui/ListVertical/ListVertical";
import {ListVerticalItem} from "shared/ui/ListVertical/ListVerticalItem";
import {Recipient} from "shared/ui/Chat/Recipient";
import {TabGroup} from "shared/ui/Tabs/TabGroup";
import {Tab} from "shared/ui/Tabs/Tab";
import {Conversations} from "widgets/Chat/Conversations";
import {Block} from "shared/ui/Block/Block";
import {DataPresenter} from "widgets/DataPresenter/DataPresenter";


const FriendsPage = () => {
    const { t } = useTranslation('about')

    const [activeTab, setActiveTab] = useState('My friends');

    const friends = [1,2,3,4,5,6,7,8,9];

    const friendsAlso = [1,2,3,5,6];

    return (
        <div>
            <TabGroup>
                <Tab label={'My friends'} isActive={activeTab === 'My friends'} onClick={ () => setActiveTab('My friends')}/>
                <Tab label={'New friends'} isActive={activeTab === 'New friends'} onClick={ () => setActiveTab('New friends')}/>
            </TabGroup>

            <Block width={'100%'}>

                {activeTab === 'My friends' &&
                    <DontHaveFriends />
                }
                {activeTab === 'New friends' &&
                    <>
                        <DataPresenter
                            // data={friends}
                        />

                        <Block top={60}>
                            <HorizontalList title={'You may know these people'}>
                                {friends.map((friend, friendsIndex) => {
                                    return (<>
                                        <HorizontalListItem key={friendsIndex}>
                                            <FriendCard />
                                        </HorizontalListItem>
                                    </>)
                                })}
                            </HorizontalList>

                            <HorizontalList title={'People in the position "Developer" also follow these people'}>
                                {friendsAlso.map((friend, friendsIndex) => {
                                    return (<>
                                        <HorizontalListItem key={friendsIndex}>
                                            <FriendCard />
                                        </HorizontalListItem>
                                    </>)
                                })}
                            </HorizontalList>
                        </Block>
                    </>
                }
            </Block>
        </div>
    )
}

export default FriendsPage
