import { BaseButton } from '@/BaseButton';
import { BiSave } from 'react-icons/bi';

export function SaveFileButton() {
    return (
        <BaseButton
            onClick={() => console.log('save file button')}
            label='save'
            Icon={<BiSave size={30} />}
        />
    );
}
