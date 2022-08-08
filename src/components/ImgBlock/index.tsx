import {Wrapper} from "../../styles";
import Navigation from "../Navigation";
import {ContentDiv, HeaderInfoDiv} from "./styles";

const Header = () => {
    return (
        <header>
            <Navigation/>
            <HeaderInfoDiv>
                <Wrapper>
                    <ContentDiv>
                        <TextBlock>Find your community, Find your strength</TextBlock>
                        <ImgBlock></ImgBlock>
                    </ContentDiv>
                </Wrapper>
            </HeaderInfoDiv>
        </header>
    );
};

export default Header;
