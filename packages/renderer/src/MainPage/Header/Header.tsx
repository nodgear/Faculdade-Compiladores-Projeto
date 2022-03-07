import { ClearButton } from './ClearButton';
import { ExecuteButton } from './ExecuteButton';
import { FileButton } from './FileButton';
import { Container } from './Header.styles';
import { OpenFileButton } from './OpenFileButton';
import { SaveFileButton } from './SaveFileButton';

export function Header() {
    return (
        <Container>
            <FileButton />
            <OpenFileButton />
            <SaveFileButton />
            <ClearButton />
            <ExecuteButton />
        </Container>
    );
}
