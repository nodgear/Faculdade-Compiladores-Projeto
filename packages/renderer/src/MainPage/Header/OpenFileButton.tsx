import { BaseButton } from '@/BaseButton';
import { BiFolderOpen } from 'react-icons/bi';

export function OpenFileButton() {
    return (
        <BaseButton
            onClick={() => console.log('open file button')}
            label='open'
            Icon={<BiFolderOpen size={30} />}
        />
    );
}
