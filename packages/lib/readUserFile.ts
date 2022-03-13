export async function readUserFile() {
    const textContent: string = await window.ipcRenderer.invoke(
        'my-invokable-ipc',
        {
            type: 'auauau'
        }
    );
    return textContent;
}
