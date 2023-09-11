import cls from './Block.module.scss'
import { FC,ReactNode } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'

export enum TypeAlignBlock {
    CENTER = 'center',
    START = 'start',
    END = 'end',
}
interface BlockProps {
    children: ReactNode;
    width?: string;
    align?: TypeAlignBlock;
    top?: number;
    padding?: number;
}
export const Block: FC<BlockProps> = (props) => {
    const { children, width, align, top, padding } = props;

    const style = {
        width,
        marginTop: top,
        padding
    }

    return (
        <div className={classNames(cls.Block, { [cls['Block--' + align]]: true }, [])} style={style} >
            { children }
        </div>
    )
}
