import { Button } from './BaseButton.styles';

type props = {
    onClick: () => void;
    Icon: JSX.Element;
};

export function BaseButton({ onClick, Icon }: props) {
    return <Button onClick={onClick}>{Icon}</Button>;
}
