import {FC} from 'react'
import {Card} from "shared/ui/Card/Card";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Typography} from "shared/ui/Typography/Typography";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";
import {Avatar} from "shared/ui/Avatar/Avatar";

import cls from './FriendCard.module.scss'

import PlusIcon from 'shared/assets/icons/plusInCircle.svg'
import {classNames} from "shared/lib/helpers/classNames";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";
interface CardProps {
}
export const FriendCard: FC<CardProps> = (props) => {


    return (
        <Card padding={'24px 12px'} >
            <div className={classNames(cls.FriendCard__cover)}></div>
            {/*<div className={classNames(cls.FriendCard, { }, [])} style={style} >*/}
            {/*    { children }*/}
            {/*</div>*/}
            <div className={classNames(cls.FriendCard__content)}>
                <Block width={'100%'} align={TypeAlignBlock.CENTER}>
                    <Avatar size={100} bottom={12}/>
                    <Typography size={20} weight={600} bottom={2} text={'Omar Aliev'} color={'#112042'} />
                    <Typography size={14} weight={400} bottom={16} text={'Frontend Developer'} color={'#817C7C'} />
                    <Block>
                        <GroupInline bottom={16}>
                            <Avatar size={32} right={8} />
                            <Typography size={12} weight={400} bottom={0} text={'3 common friends'} />
                        </GroupInline>
                    </Block>
                    <Button theme={ThemeButton.CLASSIC}>
                        <PlusIcon />
                        <Typography left={10} size={20} weight={400} text={'Add friend'} />
                    </Button>
                </Block>
            </div>
        </Card>
    )
}
