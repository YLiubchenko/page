import { FC } from 'react';
import { ImgDiv } from './styles';

interface IProps {
  alt: string;
  imgSrc: string;
}

const ImgBlock: FC<IProps> = ({ alt, imgSrc }) => {
  return (
    <ImgDiv>
      <img src={imgSrc} alt={alt} />
    </ImgDiv>
  );
};

export default ImgBlock;
