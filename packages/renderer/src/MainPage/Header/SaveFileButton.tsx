import { BaseButton } from '@/BaseButton';
import { BiSave } from 'react-icons/bi';

export function SaveFileButton() {
    return (
        <BaseButton
            title="Salvar (CTRL+S)"
            onClick={() => console.log('save file button')}
            Icon={<BiSave size={20} />}
        />
    );
}
