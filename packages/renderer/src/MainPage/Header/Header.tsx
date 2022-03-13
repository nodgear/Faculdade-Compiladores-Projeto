import { ClearButton } from './ClearButton';
import { ExecuteButton } from './ExecuteButton';
import { NewFileButton } from './NewFileButton';
import { Container } from './Header.styles';
import { OpenFileButton } from './OpenFileButton';
import { SaveFileButton } from './SaveFileButton';

export function Header() {
    return (
        <Container>
            <NewFileButton />
            <OpenFileButton />
            <SaveFileButton />
            <ClearButton />
            <ExecuteButton />
        </Container>
    );
}
