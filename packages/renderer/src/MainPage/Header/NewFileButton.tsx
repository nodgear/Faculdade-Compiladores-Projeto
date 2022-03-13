import { BaseButton } from '@/BaseButton';
import { FcDocument } from 'react-icons/fc';

export function NewFileButton() {
    return (
        <BaseButton
            title="Novo (CTRL+N)"
            onClick={() => console.log('file button')}
            Icon={<FcDocument size={20} />}
        />
    );
}
