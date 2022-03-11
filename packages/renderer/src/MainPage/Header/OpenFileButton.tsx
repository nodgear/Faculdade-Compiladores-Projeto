import { BaseButton } from '@/BaseButton';
import { FcOpenedFolder } from 'react-icons/fc';

export function OpenFileButton() {
    return (
        <BaseButton
            onClick={() => console.log('open file button')}
            Icon={<FcOpenedFolder size={20} />}
        />
    );
}
