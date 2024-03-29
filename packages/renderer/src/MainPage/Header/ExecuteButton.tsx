import { BaseButton } from '@/BaseButton';
import { FcVideoFile } from 'react-icons/fc';

export function ExecuteButton() {
    return (
        <BaseButton
            onClick={() => console.log('execute button')}
            Icon={<FcVideoFile size={20} />}
        />
    );
}
