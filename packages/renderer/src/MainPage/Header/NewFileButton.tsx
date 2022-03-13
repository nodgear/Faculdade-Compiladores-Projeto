import { BaseButton } from '@/BaseButton';
import { FcDocument } from 'react-icons/fc';

export function NewFileButton() {
    return (
        <BaseButton
            onClick={() => console.log('file button')}
            Icon={<FcDocument size={20} />}
        />
    );
}
