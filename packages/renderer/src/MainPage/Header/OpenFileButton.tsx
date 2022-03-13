import { BiFolderOpen } from 'react-icons/bi';
import { readUserFile } from '../../../../lib/readUserFile';
import { BaseButton } from '@/BaseButton';
import { useEditorStore } from '../Body/Editor/useEditorStore';

export function OpenFileButton() {
    const { setEditorCode } = useEditorStore();

    async function onClick() {
        const content = await readUserFile();
        setEditorCode(content);
    }

    return (
        <BaseButton
            onClick={onClick}
            label='open'
            Icon={<BiFolderOpen size={30} />}
        />
    );
}
