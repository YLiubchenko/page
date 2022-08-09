import { FC } from 'react';

import { AppPagePath } from '../../pages/AppPagePath';
import Partner from '../../assets/Partner';
import { Logo } from '../../assets/icons/logo';

import { DividerDiv, LogoLink, LogoWrapperDiv, PartnerLogoDIv } from './styles';

interface IProps {
  isPartner?: boolean;
}

const PartnerLogoBlock: FC<IProps> = ({ isPartner = true }) => {
  return (
    <LogoWrapperDiv>
      <LogoLink to={AppPagePath.HOME}>
        <Logo />
      </LogoLink>
      {isPartner && (
        <>
          <DividerDiv />
          <PartnerLogoDIv>
            <Partner />
          </PartnerLogoDIv>
        </>
      )}
    </LogoWrapperDiv>
  );
};

export default PartnerLogoBlock;
