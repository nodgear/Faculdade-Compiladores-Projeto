import { BaseButton } from '@/BaseButton';
import { useEditorStore } from '../Body/Editor/useEditorStore';
import save from '@/assets/save.svg';

export function SaveFileButton() {
    const { setEditorCode } = useEditorStore();

    async function onClick() {}

    return <BaseButton onClick={onClick} Icon={<img src={save} />} />;
}
