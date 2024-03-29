import { StrictMode } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { MainPage } from './MainPage';

export function App() {
    return (
        <StrictMode>
            <GlobalStyle />
            <MainPage />
        </StrictMode>
    );
}
