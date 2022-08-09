import { FC } from 'react';

import Burger from '../../../assets/Burger';
import JoinLink from '../JoinLink';
import PartnerLogoBlock from '../PartnerLogoBlock';

import { Header } from './styles';

interface IProps {
  isPartner: boolean;
}

const MobileHeader: FC<IProps> = ({ isPartner }) => {
  return (
    <Header>
      <Burger />
      <PartnerLogoBlock isPartner={isPartner} />
      <JoinLink text="Join" />
    </Header>
  );
};

export default MobileHeader;
