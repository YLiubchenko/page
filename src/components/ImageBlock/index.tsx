import { FC } from 'react';

import { ImgDiv } from './styles';

interface IProps {
  alt: string;
  imgSrc: string;
}

const ImageBlock: FC<IProps> = ({ alt, imgSrc }) => {
  return (
    <ImgDiv>
      <img src={imgSrc} alt={alt} />
    </ImgDiv>
  );
};

export default ImageBlock;
