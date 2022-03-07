import { BaseButton } from '@/BaseButton';
import { BiPlayCircle } from 'react-icons/bi';

export function ExecuteButton() {
    return (
        <BaseButton
            onClick={() => console.log('execute button')}
            label='execute'
            Icon={<BiPlayCircle size={30} />}
        />
    );
}
