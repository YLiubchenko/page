import TextBlock from './TextBlock';

import EmptyPlay from '../../../assets/EmptyPlay';
import ImageBlock from '../../../components/ImageBlock';
import Line from '../../../components/Line/Line';

import { ContentDiv, EmptyPlayDiv, VideoDiv } from './styles';

const Content = () => {
  const src = false;

  return (
    <>
      <ContentDiv>
        {src ? (
          <VideoDiv>
            <video src={src}></video>
          </VideoDiv>
        ) : (
          <EmptyPlayDiv>
            <EmptyPlay />
          </EmptyPlayDiv>
        )}
        <TextBlock
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor izxczxcxz        dsfs df wref wer wre wrw we ncididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
        <ImageBlock
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
          alt="Hello"
        />
        <TextBlock
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
      </ContentDiv>
      <Line />
      <ContentDiv>
        <TextBlock
          className="mobile-reverse"
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
        <ImageBlock
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
          alt="Hello"
        />
      </ContentDiv>
      <Line />
      <ContentDiv>
        <ImageBlock
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
          alt="Hello"
        />
        <TextBlock
          text="Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Quis nostrud exercitation ullamco laboris"
        />
      </ContentDiv>
    </>
  );
};

export default Content;
