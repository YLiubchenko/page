import { FC } from 'react';

import { TextDiv, TextP, TitleH3 } from './styles';

interface IProps {
  title: string;
  text: string;
}

const TextBlock: FC<IProps> = ({ title, text }) => {
  return (
    <TextDiv>
      <TitleH3>{title}</TitleH3>
      <TextP>{text}</TextP>
    </TextDiv>
  );
};

export default TextBlock;
