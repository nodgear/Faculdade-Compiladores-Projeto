import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';

export function Editor() {
    return (
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
            <AceEditor
                theme='monokai'
                fontSize={20}
                height='100%'
                width='100%'
                onChange={newValue => console.log(newValue)}
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
}
