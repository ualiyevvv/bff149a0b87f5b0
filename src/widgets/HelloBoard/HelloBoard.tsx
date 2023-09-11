import {FC} from 'react'
import {Card} from "shared/ui/Card/Card";
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Typography} from "shared/ui/Typography/Typography";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";

import {classNames} from "shared/lib/helpers/classNames";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";
import cls from './HelloBoard.module.scss'
interface HelloBoardProps {

}

export const HelloBoard: FC<HelloBoardProps> = (props) => {

    return (
        <div className={classNames(cls.HelloBoard)}>
            <Block>
                <div className={classNames(cls.HelloBoard__title)}>
                    Hi, Omar
                </div>
                <Typography size={20} weight={400} color={'#817C7C'} text={'Product designer '}/>
            </Block>
        </div>
    )
}
