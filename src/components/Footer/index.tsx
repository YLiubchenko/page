import { Logo } from '../../shared/assets/icons/logo';
import { Wrapper } from '../../styles';
import { CopyrightP, FooterBlock, FooterDiv, ListWrapper, LogoDiv, SocialNetworkDiv } from './styles';
import { Blog } from '../../shared/assets/icons/blog';
import { Facebook } from '../../shared/assets/icons/facebook';
import { Twitter } from '../../shared/assets/icons/twitter';
import { Linkedin } from '../../shared/assets/icons/linkedin';
import { Instagram } from '../../shared/assets/icons/instagram';
import { Youtube } from '../../shared/assets/icons/youtube';
import Title from './Title/Title';
import LinkFooter from './LinkFooter/Title';

const Footer = () => {
  return (
    <FooterBlock>
      <Wrapper>
        <FooterDiv>
          <ListWrapper>
            <div>
              <Title title="Company" />
              <LinkFooter text="About us" />
              <LinkFooter text="Privacy and Security" />
              <LinkFooter text="Press" />
              <LinkFooter text="Blog" />
              <LinkFooter text="Funding" />
              <LinkFooter text="Careers" />
              <LinkFooter text="Team of advisors" />
            </div>
            <div>
              <Title title="Work with us" />
              <LinkFooter text="Our partners" />
              <LinkFooter text="Research Publications" />
            </div>
            <div>
              <Title title="Support" />
              <LinkFooter text="Contact us" />
              <LinkFooter text="Crisis Resources" />
              <LinkFooter text="Help Center" />
              <LinkFooter text="User Agreement" />
            </div>
          </ListWrapper>
          <div>
            <LogoDiv>
              <Logo />
            </LogoDiv>
            <SocialNetworkDiv>
              <a href="">
                <Blog />
              </a>
              <a href="">
                <Facebook />
              </a>
              <a href="">
                <Twitter />
              </a>
              <a href="">
                <Linkedin />
              </a>
              <a href="">
                <Youtube />
              </a>
              <a href="">
                <Instagram />
              </a>
            </SocialNetworkDiv>
            <CopyrightP>&copy; 2005-2021 PatientsLikeMe. All Rights Reserved.</CopyrightP>
            <CopyrightP>
              Information on PatientsLikeMe.com is reported by our members and is not medical advice.
            </CopyrightP>
          </div>
        </FooterDiv>
      </Wrapper>
    </FooterBlock>
  );
};

export default Footer;
