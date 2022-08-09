import { FC } from 'react';

import { useTabletMediaQuery } from '../../shared/hooks/usMediaQueries.hooks';
import CommonHeader from './CommonHeader';
import PartnerHeader from './PartnerHeader';
import MobileHeader from './MobileHeader';

const AppHeader: FC = () => {
  const { isTablet } = useTabletMediaQuery();
  const isPartner = false;

  if (isTablet) {
    return <MobileHeader isPartner={isPartner} />;
  }

  return isPartner ? <PartnerHeader /> : <CommonHeader />;
};

export default AppHeader;
