import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import { useEditorStore } from './useEditorStore';

export function Editor() {
    const { editorCode, setEditorCode } = useEditorStore();

    return (
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            <AceEditor
                theme='monokai'
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
