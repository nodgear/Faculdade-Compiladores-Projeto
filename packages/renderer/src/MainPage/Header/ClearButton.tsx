import { BaseButton } from '@/BaseButton';
import { MdClear } from 'react-icons/md';

export function ClearButton() {
    return (
        <BaseButton
            onClick={() => console.log('clear button')}
            label='clear'
            Icon={<MdClear size={30} />}
        />
    );
}
