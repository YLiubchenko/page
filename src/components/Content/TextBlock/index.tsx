import {ContentDiv} from "./styles";
import ImgBlock from "../ImgBlock";

const Content = () => {
    return (
        <ContentDiv>
            <video src=""></video>
            <ImgBlock
                imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
                alt="Hello"/>
            <ImgBlock
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
            alt="Hello"/>
            <ImgBlock
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
            alt="Hello"/>
        </ContentDiv>
    );
};

export default Content;
