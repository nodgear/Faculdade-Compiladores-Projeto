import { Button } from './BaseButton.styles';

type props = {
    onClick: () => void;
    Icon: JSX.Element;
    label: string;
};

export function BaseButton({ onClick, label, Icon }: props) {
    return (
        <Button onClick={onClick}>
            {Icon}
            {label}
        </Button>
    );
}
