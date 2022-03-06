import { StrictMode } from 'react';

export function App() {
    return (
        <StrictMode>
            <div>
                <header>
                    <div>
                        <div></div>
                    </div>
                    <p>Hello Electron + Vite + React!</p>
                    <p>
                        <button>count is: 1</button>
                    </p>
                    <p>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </p>
                    <div>
                        <a
                            href='https://reactjs.org'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Learn React
                        </a>
                        {' | '}
                        <a
                            href='https://vitejs.dev/guide/features.html'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Vite Docs
                        </a>
                        <div>
                            Place static files into the{' '}
                            <code>src/renderer/public</code> folder
                        </div>
                    </div>
                </header>
            </div>
        </StrictMode>
    );
}
