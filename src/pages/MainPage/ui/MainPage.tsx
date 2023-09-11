import React from 'react'
import {useTranslation} from 'react-i18next'
import {GroupInline} from "shared/ui/GroupInline/GroupInline";
import {Block} from "shared/ui/Block/Block";
import {TeamateInfo} from "features/TeamateInfo/ui/TeamateInfo";
import {Button, ThemeButton} from "shared/ui/Button/Button";

import PlusIcon from 'shared/assets/icons/plusInCircle.svg'
import {Typography} from "shared/ui/Typography/Typography";
import {RoomAdvancedCard} from "widgets/RoomAdvancedCard/RoomAdvancedCard";
import {HelloBoard} from "widgets/HelloBoard/HelloBoard";
const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <HelloBoard />
            <GroupInline>
                <Block width={'100%'} top={0} padding={20}>
                    <Button theme={ThemeButton.CARDIC}>
                        <PlusIcon />
                        <Typography size={24} weight={500} text={'Create a room'} color={'#112042'}/>
                    </Button>
                </Block>
                <Block width={'100%'} top={0} padding={20}>
                    <Button theme={ThemeButton.CARDIC}>
                        <PlusIcon />
                        <Typography size={24} weight={500} text={'Find investor'} color={'#112042'}/>
                    </Button>
                </Block>
            </GroupInline>
            <Block>
                <Block padding={20}>
                    <Typography size={24} weight={500} text={'Best recent startup projects'} />
                </Block>
                <GroupInline>
                    <Block width={'100%'} padding={20}>
                        <RoomAdvancedCard />
                    </Block>
                    <Block width={'100%'} padding={20}>
                        <RoomAdvancedCard />
                    </Block>
                </GroupInline>
            </Block>
        </div>
    )
}

export default MainPage
