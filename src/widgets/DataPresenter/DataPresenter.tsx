import {Typography} from "shared/ui/Typography/Typography";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Block} from "shared/ui/Block/Block";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";

import CardViewIcon from 'shared/assets/icons/card-view.svg'
import ListViewIcon from 'shared/assets/icons/list-view.svg'
import React, {useState} from "react";
import {FriendCard} from "widgets/FriendCard/FriendCard";
import {Grid} from "shared/ui/Grid/Grid";
import {FriendRow} from "widgets/FriendRow/FriendRow";

import ArrowBottom from 'shared/assets/icons/arrow-bottom.svg'

export const DataPresenter = () => {

    const [viewStyle, setVewStyle] = useState('card');

    const [visibleItems, setVisibleItems] = useState(4);
    function changeViewStyle () {
        viewStyle === 'list' ? setVewStyle('card') : setVewStyle('list');
    }

    function showMore () {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
    };
    const data = [1,2,3,5,4,5,6]

    return (
        <Block padding={20}>
            <GroupInline>
                <GroupInline>
                    <Typography size={20} weight={400} text={'Sort by:'}/>
                    <select name="" id="">
                    </select>
                </GroupInline>
                <GroupInline>
                    search
                    <Button theme={ThemeButton.ICONIC} onClick={changeViewStyle}>
                        {viewStyle === 'card'
                            ? <CardViewIcon />
                            : <ListViewIcon />
                        }
                    </Button>
                </GroupInline>
            </GroupInline>
            <Block top={20}>
                {viewStyle === 'list'
                    ? data.slice(0, visibleItems).map((item, index) => {
                        return (<>
                            <FriendRow />
                        </>)
                    })
                    : <Grid>
                        {data.slice(0, visibleItems).map((item, index) => {
                            return (<>
                                <FriendCard/>
                            </>)
                        })}
                    </Grid>
                }

            </Block>
            {visibleItems < data.length && (
                <Block top={16}>
                    <Button theme={ThemeButton.ICONIC} onClick={showMore}>
                        <Typography size={16} weight={400} color={'#817C7C'} text={'Show all'}/>
                        <ArrowBottom />
                    </Button>
                </Block>
            )}
        </Block>
    )
}
