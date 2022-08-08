import ImgBlock from '../../../components/ImageBlock';

import Button from '../../../components/Button';

import { AppWrapperDiv } from '../../../styles';
import { ContentDiv, H1, HeaderInfoDiv, TextBlockDiv } from './styles';

const HeaderInfoBlock = () => {
  const buttonText = 'Label';
  const title = 'Find your community, Find your strength';
  const titleStyle = {};
  return (
    <HeaderInfoDiv>
      <AppWrapperDiv>
        <ContentDiv>
          <TextBlockDiv>
            <H1 style={titleStyle}>{title}</H1>
            <Button text={buttonText} />
          </TextBlockDiv>
          <ImgBlock
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
            alt="Hello"
          />
        </ContentDiv>
      </AppWrapperDiv>
    </HeaderInfoDiv>
  );
};

export default HeaderInfoBlock;
