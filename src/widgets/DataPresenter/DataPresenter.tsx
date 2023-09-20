import {Typography} from "shared/ui/Typography/Typography";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Block} from "shared/ui/Block/Block";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";

import CardViewIcon from 'shared/assets/icons/card-view.svg'
import ListViewIcon from 'shared/assets/icons/list-view.svg'
import React, { useState, useEffect } from "react";
import {FriendCard} from "widgets/FriendCard/FriendCard";
import {Grid} from "shared/ui/Grid/Grid";
import {FriendRow} from "widgets/FriendRow/FriendRow";

import ArrowBottom from 'shared/assets/icons/arrow-bottom.svg'

import Select from 'react-select';
import { Search } from 'shared/ui/Search/Search';
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

    const [searchValue, setSearchValue] = useState('')


    const selectOptions = [
        { value: 'asc', label: 'Alphabetical' },
        { value: 'desc', label: 'desc' },
        // { value: 'asc', label: 'Alphabetical' }
    ];

    // const handleInputChange = (inputText, meta) => {
    //     if (meta.action !== 'input-blur' && meta.action !== 'menu-close') {
    //         setInputText(inputText)
    //     }
    // }

    // const [cityOptions, setCityOptions] = useState([]);

    // useEffect(()=>{
    //     const c = cities.map(obj => ({label: obj.name, value: obj.name,}));
    //     // logger.log({cities, cityOptions: c});
    //     setCityOptions(c);
    // },[cities])
    return (
        <Block padding={20}>
            <GroupInline>
                <GroupInline>
                    <Typography right={16} size={20} weight={400} text={'Sort by:'}/>
                    <Select
                        // placeholder={'Введите город'}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                width: 240,
                                borderRadius: 12,
                                border: '1px solid var(--brand-accent, #8189F3)',
                                padding: 8, // 16px in figma but value-container has padding 2px 8px
                                fontSize: 20,
                                color: '#2D2D2E',
                                zIndex: 11,
                                cursor: 'pointer'
                                // marginBottom: '10px'
                            }),
                            menu: (baseStyles, state) => ({
                                ...baseStyles,
                                zIndex: 11
                                // background: 'blue'
                            }),
                            option: (baseStyles, state) => ({
                                ...baseStyles,
                                cursor: 'pointer'
                            }),
                            clearIndicator: (base) => ({
                                ...base,
                                position: 'absolute',
                                right: 0
                            })
                        }}
                        // classNames={{
                        //     control: (state) =>
                        //         state.isFocused ? 'border-red-600' : 'border-grey-300',
                        // }}
                        name={'sort'}
                        components={{
                            // …
                            IndicatorSeparator: () => null
                        }}
                        defaultValue={selectOptions[0]}
                        options={selectOptions}
                        required
                    />
                </GroupInline>
                <GroupInline>
                    <Search
                        name={'search'}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        required
                    />
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
