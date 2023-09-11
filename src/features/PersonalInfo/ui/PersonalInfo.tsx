import cls from './PersonalInfo.module.scss'
import {FC} from 'react'
import {classNames} from 'shared/lib/helpers/classNames'
import {GroupInput} from "shared/ui/GroupInput/GroupInput";
import {Input} from "shared/ui/Input/Input";
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Block} from 'shared/ui/Block/Block'
import {Avatar} from "shared/ui/Avatar/Avatar";

interface PersonalInfoProps {
}

export const PersonalInfo: FC<PersonalInfoProps> = (props) => {

    return (
        <div className={classNames(cls.PersonalInfo, { }, [])}>
            <Block>
                <Avatar size={120} bottom={32} />
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
                        type={'password'}
                        name={'password'}
                        // onChange={}
                        // placeholder={'Name'}
                        required={true}
                        isGroup={true}
                        // value={}
                    />
                    <Button theme={ThemeButton.CLASSIC} width={WidthButton.FULL} >
                        Change password
                    </Button>
                </GroupInput>
            </Block>
        </div>
    )
}
