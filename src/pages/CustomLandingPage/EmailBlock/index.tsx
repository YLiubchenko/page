import { FC } from 'react';

import Button from '../../../components/Button';

import { ContainerDiv, EmailDiv, FormDiv, TextP, TitleH2 } from './styles';
import { AppWrapperDiv } from '../../../styles';

const EmailBlock: FC = () => {
  const title = 'Laboris nisi ut aliquip ex ea commodo consequat.';
  const text =
    ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
    '            laborum.';
  const btnText = 'CTA';

  return (
    <EmailDiv>
      <AppWrapperDiv>
        <ContainerDiv>
          <TitleH2>{title}</TitleH2>
          <TextP>{text}</TextP>
          <FormDiv>
            <input type="email" placeholder="Email" />
            <Button text={btnText} />
          </FormDiv>
        </ContainerDiv>
      </AppWrapperDiv>
    </EmailDiv>
  );
};

export default EmailBlock;
