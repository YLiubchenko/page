import { FC, ReactNode } from 'react';

import { LinkA as LinkAStyles } from './styles';

interface IProps {
  text?: string;
  link?: string;
  children?: ReactNode;
}

const LinkA: FC<IProps> = ({ link, text, children, ...props }) => {
  return (
    <LinkAStyles href={link} {...props}>
      {text || children}
    </LinkAStyles>
  );
};

export default LinkA;
