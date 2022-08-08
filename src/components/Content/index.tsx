import { ContentDiv } from './styles';
import ImgBlock from '../ImgBlock';
import TextBlock from './TextBlock';
import { Wrapper } from '../../styles';
import Line from '../Line/Line';

const Content = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <video src=""></video>
        <TextBlock
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
      </ContentDiv>
      <ContentDiv>
        <ImgBlock
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
          alt="Hello"
        />
        <TextBlock
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
        <Line />
      </ContentDiv>
      <ContentDiv>
        <TextBlock
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
        <ImgBlock
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
          alt="Hello"
        />
        <Line />
      </ContentDiv>
      <ContentDiv>
        <ImgBlock
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
          alt="Hello"
        />
        <TextBlock
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
      </ContentDiv>
    </Wrapper>
  );
};

export default Content;
