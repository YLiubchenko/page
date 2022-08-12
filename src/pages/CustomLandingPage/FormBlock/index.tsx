import { FC } from 'react';

import Button from '../../../components/Button';

import { ContainerDiv, EmailDiv, FormDiv, TextP, TitleH2 } from './styles';
import { AppWrapperDiv } from '../../../styles';

interface IProps {
  title: string;
  subTitle: string;
  embedCode: any;
}
const FormBlock: FC<IProps> = ({ title, subTitle, embedCode }) => {
  const btnText = 'CTA';

  return (
    <EmailDiv>
      <AppWrapperDiv>
        <ContainerDiv>
          <TitleH2>{title}</TitleH2>
          <TextP>{subTitle}</TextP>
          <FormDiv>
            <input type="email" placeholder="Email" />
            <Button text={btnText} />
          </FormDiv>
        </ContainerDiv>
      </AppWrapperDiv>
    </EmailDiv>
  );
};

export default FormBlock;
