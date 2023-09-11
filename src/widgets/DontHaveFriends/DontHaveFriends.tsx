import {Typography} from "shared/ui/Typography/Typography";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Block, TypeAlignBlock} from "shared/ui/Block/Block";

export const DontHaveFriends = () => {

    return (
        <div>
            <Block width={'100%'} align={TypeAlignBlock.CENTER} top={100}>
                <Typography size={32} color={'817C7C'} bottom={24} text={'You don’t have friends'}  />
                <Typography size={20} color={'D2D1D1'} bottom={40} text={'Let’s try to find friends to build connections'}  />
                <Button theme={ThemeButton.CLASSIC}>
                    Find friends
                </Button>
            </Block>
        </div>
    )
}
