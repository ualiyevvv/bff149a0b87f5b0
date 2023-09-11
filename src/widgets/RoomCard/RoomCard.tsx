import {FC} from 'react'
import {Card} from "shared/ui/Card/Card";
import {Button, ThemeButton, WidthButton} from "shared/ui/Button/Button";
import {Typography} from "shared/ui/Typography/Typography";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";
import {Avatar} from "shared/ui/Avatar/Avatar";

import PlusIcon from 'shared/assets/icons/plusInCircle.svg'

interface RoomCardProps {

}

export const RoomCard: FC<RoomCardProps> = (props) => {

    return (
        <Card padding={'20px'} >
            <Block width={'100%'} align={TypeAlignBlock.CENTER}>
                <Avatar size={100} bottom={12}/>
                <Typography size={20} weight={600} bottom={2} text={'Omar Aliev'} color={'#112042'} />
                <Typography size={14} weight={400} bottom={16} text={'Frontend Developer'} color={'#817C7C'} />
                <Button theme={ThemeButton.CLASSIC} width={WidthButton.FIT}>
                    <PlusIcon />
                    <Typography left={10} size={20} weight={400} text={'Add friend'} />
                </Button>
            </Block>
        </Card>
    )
}
