import { FC } from 'react';

import { TextDiv, TextP, TitleH2 } from './styles';

interface IProps {
  title: string;
  subTitle: string;
  className?: string;
}

const TextBlock: FC<IProps> = ({ className, title, subTitle }) => {
  return (
    <TextDiv className={className}>
      <TitleH2>{title}</TitleH2>
      <TextP>{subTitle}</TextP>
    </TextDiv>
  );
};

export default TextBlock;
