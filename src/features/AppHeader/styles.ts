import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { DeviceSize } from '../../shared/constants';

export const JoinLink = styled(Link)`
  min-height: 39px;
  line-height: 1;
  padding: 10px 20px;
  font-size: 16px;
  background: #fee019;
  border: 1px solid #fee019;
  font-weight: 700;
`;

export const LogoWrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const DividerDiv = styled.div`
  height: 39px;
  width: 1px;
  background: #b8b8b8;
`;

export const LogoLink = styled(Link)`
  @media (max-width: ${DeviceSize.mobile}px) {
    svg {
      width: 104px;
      height: 36px;
    }
  }
`;

export const PartnerLogoDIv = styled.div`
  width: 86px;

  @media (max-width: ${DeviceSize.mobile}px) {
    svg {
      width: 100%;
      height: 36px;
    }
  }
`;
