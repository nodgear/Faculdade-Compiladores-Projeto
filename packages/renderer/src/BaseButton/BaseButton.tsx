import { Button } from './BaseButton.styles';

type props = {
    onClick: () => void;
    title: string;
    Icon: JSX.Element;
};

export function BaseButton({ onClick, Icon, title }: props) {
    return <Button title={title} onClick={onClick}>{Icon}</Button>;
}
