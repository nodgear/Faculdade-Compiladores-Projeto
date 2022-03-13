import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import { useEditorStore } from './useEditorStore';

export function Editor() {
    const { editorCode, setEditorCode } = useEditorStore();

    return (
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            <AceEditor
                theme='tomorrow_night'
                fontSize={20}
                height='100%'
                width='100%'
                value={editorCode}
                onChange={newValue => setEditorCode(newValue)}
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
}
