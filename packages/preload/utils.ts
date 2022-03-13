const domReadyStates: DocumentReadyState[] = ['complete', 'interactive'];

export function waitDomReady() {
    return new Promise<void>(resolve => {
        if (isDomStateReady()) return resolve();
        document.addEventListener('readystatechange', () => {
            if (isDomStateReady()) return resolve();
        });
    });
}

function isDomStateReady() {
    return domReadyStates.includes(document.readyState);
}
