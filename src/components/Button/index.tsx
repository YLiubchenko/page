import { FC, ReactNode } from 'react';

import { ButtonStyle } from './styles';

interface IProps {
  text?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<IProps> = ({ text, children, ...props }) => {
  return <ButtonStyle {...props}>{text || children}</ButtonStyle>;
};

export default Button;
