import { FC } from 'react';

import { TextDiv, TextP, TitleH2 } from './styles';

interface IProps {
  title: string;
  text: string;
  className?: string;
}

const TextBlock: FC<IProps> = ({ className, title, text }) => {
  return (
    <TextDiv className={className}>
      <TitleH2>{title}</TitleH2>
      <TextP>{text}</TextP>
    </TextDiv>
  );
};

export default TextBlock;
