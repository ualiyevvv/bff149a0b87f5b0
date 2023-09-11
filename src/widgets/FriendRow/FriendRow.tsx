import {FC} from 'react'
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Block} from "shared/ui/Block/Block";
import {Avatar} from "shared/ui/Avatar/Avatar";

import cls from './FriendRow.module.scss'
import {classNames} from "shared/lib/helpers/classNames";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";

import DirectIcon from 'shared/assets/icons/textmessage.svg'
import DeleteIcon from 'shared/assets/icons/recyclebin.svg'
import {Typography} from "shared/ui/Typography/Typography";
interface FriendRowProps {
}
export const FriendRow: FC<FriendRowProps> = (props) => {


    return (
        <div className={classNames(cls.FriendRow)}>
            <GroupInline>
                <GroupInline>
                    <Avatar size={88} right={24}/>
                    <Block>
                        <Typography bottom={8} size={24} weight={500} color={'#112042'} text={'Asema Maxutova'}/>
                        <Typography size={20} weight={400} color={'#817C7C'} text={'FrontendDeveloper | Designer | Project Manager'}/>
                    </Block>
                </GroupInline>
                <GroupInline>
                    <Button theme={ThemeButton.CLASSIC} width={WidthButton.FIT}>
                        <DirectIcon />
                    </Button>
                    <Typography left={16}/>
                    <Button theme={ThemeButton.OUTLINED} width={WidthButton.FIT}>
                        <DeleteIcon />
                    </Button>
                </GroupInline>
            </GroupInline>
        </div>
    )
}
