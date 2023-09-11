import {Typography} from "shared/ui/Typography/Typography";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";

export const DontHaveCreatedRooms = () => {

    return (
        <div>
            <Block width={'100%'} align={TypeAlignBlock.CENTER} top={100}>
                <Typography align={'center'} size={32} color={'817C7C'} bottom={24} text={'You haven’t created any room yet'}  />
                <Typography align={'center'} size={20} color={'D2D1D1'} bottom={40} text={'Let’s try to create a room to start the project '}  />
                <Button theme={ThemeButton.CLASSIC}>
                    Create room
                </Button>
            </Block>
        </div>
    )
}
