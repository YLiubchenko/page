import { Wrapper } from '../../styles';
import { EmailDiv } from './styles';

const EmailBlock = () => {
  return (
    <EmailDiv>
      <Wrapper>
        <h2>Laboris nisi ut aliquip ex ea commodo consequat.</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <input type="email" placeholder="Email" />
          <button>text</button>
        </div>
      </Wrapper>
    </EmailDiv>
  );
};

export default EmailBlock;
