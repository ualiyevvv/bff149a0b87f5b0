import {FC} from 'react'
import {Card} from "shared/ui/Card/Card";
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Typography} from "shared/ui/Typography/Typography";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";
import {Avatar} from "shared/ui/Avatar/Avatar";

import PlusIcon from 'shared/assets/icons/plusInCircle.svg'

import cls from './RoomAdvancedCard.module.scss'
import {classNames} from "shared/lib/helpers/classNames";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";

interface RoomAdvancedCardProps {

}

export const RoomAdvancedCard: FC<RoomAdvancedCardProps> = (props) => {

    return (
        <Card padding={'20px'} >
            <div className={classNames(cls.RoomAdvancedCard__info)}>
                <GroupInline>
                    <Avatar right={24} size={95} bottom={0}/>
                    <Block width={'100%'} align={TypeAlignBlock.CENTER}>
                        <Typography size={24} weight={500} bottom={8} text={'Findum app'} color={'#112042'} />
                        <Typography size={16} weight={400} bottom={8} text={'0/4'} color={'#817C7C'} />
                        <Typography size={16} weight={400} bottom={8} text={'invested'} color={'#817C7C'} />
                    </Block>
                </GroupInline>
                <Block>
                    <Button theme={ThemeButton.ICONIC} width={WidthButton.FIT}>
                        <PlusIcon />
                    </Button>
                    <Typography size={16} weight={400} bottom={8} text={'Show all'} color={'#817C7C'} />
                </Block>
            </div>
            <div className={classNames(cls.RoomAdvancedCard__team)}>
                <GroupInline>
                    <Avatar right={34} size={64} bottom={0}/>
                    <Avatar right={34} size={64} bottom={0}/>
                    <Avatar right={34} size={64} bottom={0}/>
                    <Avatar right={34} size={64} bottom={0}/>
                </GroupInline>
            </div>
        </Card>
    )
}
