import { FC } from 'react';

import JoinLink from '../JoinLink';
import PartnerLogoBlock from '../PartnerLogoBlock';

import { Header, WrapperDiv } from './styles';

const PartnerHeader: FC = () => {
  return (
    <Header>
      <WrapperDiv>
        <PartnerLogoBlock />
      </WrapperDiv>
      <WrapperDiv>
        <JoinLink text="Join" />
      </WrapperDiv>
    </Header>
  );
};

export default PartnerHeader;
