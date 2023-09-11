import cls from './GeneralSettings.module.scss'
import {FC} from 'react'
import {classNames} from 'shared/lib/helpers/classNames'
import {GroupInput} from "shared/ui/GroupInput/GroupInput";
import {Input} from "shared/ui/Input/Input";
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Block} from 'shared/ui/Block/Block'
import {Typography} from "shared/ui/Typography/Typography";
import {ToggleSwitch} from "shared/ui/ToggleSwitch/ToggleSwitch";
import {GroupInline} from "shared/ui/GroupInline/GroupInline";

interface PersonalInfoProps {
}

export const GeneralSettings: FC<PersonalInfoProps> = (props) => {

    return (
        <div className={classNames(cls.TeamateInfo, { }, [])}>
            <Block width={'100%'}>
                <GroupInline>
                    <Block width={'100%'}>
                        <Typography size={24} weight={500} bottom={2} text={'Hide personal information'}/>
                        <Typography size={20} weight={400} color={'#817C7C'} text={'Hides email, location'}/>
                    </Block>
                    <ToggleSwitch isChecked={true}/>
                </GroupInline>
            </Block>
            <Block width={'100%'} top={64}>
                <GroupInline>
                    <Block width={'100%'}>
                        <Typography size={24} weight={500} bottom={2} text={'Hide invite links'}/>
                        <Typography size={20} weight={400} color={'#817C7C'} text={'Recommended if you don\'t want random people accessing your rooms'}/>
                    </Block>
                    <ToggleSwitch isChecked={false}/>
                </GroupInline>
            </Block>
        </div>
    )
}
