import { BaseButton } from '@/BaseButton';
import { FcCancel } from 'react-icons/fc';

export function ClearButton() {
    return (
        <BaseButton
            title="Limpa"
            onClick={() => console.log('clear button')}
            Icon={<FcCancel size={20} />}
        />
    );
}
