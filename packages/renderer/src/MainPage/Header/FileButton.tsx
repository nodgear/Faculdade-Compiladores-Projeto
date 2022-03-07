import { BaseButton } from '@/BaseButton';
import { BiFile } from 'react-icons/bi';

export function FileButton() {
    return (
        <BaseButton
            onClick={() => console.log('file button')}
            label='file'
            Icon={<BiFile size={30} />}
        />
    );
}
