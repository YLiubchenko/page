import ImgBlock from "../ImgBlock";
import Navigation from "../Navigation";

import {Wrapper} from "../../styles";
import {ContentDiv, HeaderInfoDiv} from "./styles";

const Header = () => {
    return (
        <header>
            <Navigation/>
            <HeaderInfoDiv>
                <Wrapper>
                    <ContentDiv>
                        <div>
                            <h1>Find your community, Find your strength</h1>
                            <button>Label</button>
                        </div>
                        <ImgBlock
                            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
                            alt="Hello"/>
                    </ContentDiv>
                </Wrapper>
            </HeaderInfoDiv>
        </header>
    );
};

export default Header;
