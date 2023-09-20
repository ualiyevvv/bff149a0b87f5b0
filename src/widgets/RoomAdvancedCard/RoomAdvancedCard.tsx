import {FC} from 'react'
import {Card} from "shared/ui/Card/Card";
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Typography} from "shared/ui/Typography/Typography";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";
import {Avatar} from "shared/ui/Avatar/Avatar";

import PlusIcon from 'shared/assets/icons/plus.svg'
import EditIcon from 'shared/assets/icons/Huge-icon.svg'
import DownArrow from 'shared/assets/icons/down-arrow-small.svg';
import PeopleIcon from 'shared/assets/icons/people-Huge-icon.svg';
import InvestedIcon from 'shared/assets/icons/invested.svg';

import cls from './RoomAdvancedCard.module.scss'
import {classNames} from "shared/lib/helpers/classNames";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";

interface RoomAdvancedCardProps {

}

export const RoomAdvancedCard: FC<RoomAdvancedCardProps> = (props) => {

    return (
        <Card padding={'20px'} >
            <div className={classNames(cls.RoomAdvancedCard__info)}>
                <div className={classNames(cls.RoomAdvancedCard__row)}>
                    <div className={classNames(cls.RoomAdvancedCard__avatar)}>
                        <Avatar right={24} size={95} bottom={0}/>
                    </div>
                    <div className={classNames(cls.RoomAdvancedCard__roominfo)}>
                        <Typography size={24} weight={500} bottom={8} text={'Findum app'} color={'#112042'} />
                        <div className={classNames(cls.RoomAdvancedCard__showall)}>
                            <PeopleIcon /> 0/4
                        </div>
                        <div className={classNames(cls.RoomAdvancedCard__showall)}>
                            <InvestedIcon/> invested
                        </div>
                    </div>
                </div>
                <div className={classNames(cls.RoomAdvancedCard__tools)}>
                    <Button theme={ThemeButton.ICONIC} width={WidthButton.FIT}>
                        <EditIcon />
                    </Button>
                    <div className={classNames(cls.RoomAdvancedCard__showall)}>
                        Show all <Typography left={4}/> <DownArrow/>
                    </div>
                </div>
            </div>
            <div className={classNames(cls.RoomAdvancedCard__team)}>
                <div className={classNames(cls.RoomAdvancedCard__teammate)}>
                    <div className={classNames(cls.RoomAdvancedCard__teammate_circle)}>
                        <PlusIcon />
                    </div>
                    <Typography size={12} text={'UX/UI designer'}/>
                </div>
                <div className={classNames(cls.RoomAdvancedCard__teammate)}>
                    <div className={classNames(cls.RoomAdvancedCard__teammate_circle)}>
                        <PlusIcon />
                    </div>
                    <Typography size={12} text={'Frontend Dev'}/>
                </div>
                <div className={classNames(cls.RoomAdvancedCard__teammate)}>
                    <div className={classNames(cls.RoomAdvancedCard__teammate_circle)}>
                        <PlusIcon />
                    </div>
                    <Typography size={12} text={'Angular '}/>
                </div>
                <div className={classNames(cls.RoomAdvancedCard__teammate)}>
                    <div className={classNames(cls.RoomAdvancedCard__teammate_circle)}>
                        <PlusIcon />
                    </div>
                    <Typography size={12} text={'PM'}/>
                </div>
            </div>
        </Card>
    )
}
