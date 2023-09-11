import cls from './TeamateInfo.module.scss'
import {FC} from 'react'
import {classNames} from 'shared/lib/helpers/classNames'
import {GroupInput} from "shared/ui/GroupInput/GroupInput";
import {Input} from "shared/ui/Input/Input";
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Block} from 'shared/ui/Block/Block'
import {Avatar} from "shared/ui/Avatar/Avatar";

interface PersonalInfoProps {
}

export const TeamateInfo: FC<PersonalInfoProps> = (props) => {

    return (
        <div className={classNames(cls.TeamateInfo, { }, [])}>
            <Block>
                <GroupInput>
                    <Input
                        type={'text'}
                        name={'name'}
                        // onChange={}
                        placeholder={'Name'}
                        required={true}
                        isGroup={true}
                        // value={}
                    />
                    <Input
                        type={'text'}
                        name={'surname'}
                        // onChange={}
                        placeholder={'Surname'}
                        required={true}
                        isGroup={true}
                        // value={}
                    />
                </GroupInput>
                <GroupInput>
                    <Input
                        type={'email'}
                        name={'email'}
                        // onChange={}
                        placeholder={'Email'}
                        required={true}
                        // value={}
                    />
                </GroupInput>
                <GroupInput>
                    <Input
                        type={'email'}
                        name={'email'}
                        // onChange={}
                        placeholder={'Location'}
                        required={true}
                        // value={}
                    />
                </GroupInput>
                <GroupInput>
                    <Input
                        type={'file'}
                        name={'file'}
                        // onChange={}
                        // placeholder={'Name'}
                        required={true}
                        isGroup={true}
                        // value={}
                    />
                    <Button theme={ThemeButton.CLASSIC} width={WidthButton.FULL} >
                        Upload
                    </Button>
                </GroupInput>
            </Block>
        </div>
    )
}
