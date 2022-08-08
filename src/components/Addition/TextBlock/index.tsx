import { FC } from 'react';
import { TextDiv } from './styles';

interface IProps {
  title: string;
  text: string;
}

const TextBlock: FC<IProps> = ({ title, text }) => {
  return (
    <TextDiv>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </TextDiv>
  );
};

export default TextBlock;
