import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthNavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RouteLink = styled(Link)`
  min-height: 39px;
  line-height: 1;
  padding: 10px 20px;
  font-size: 16px;
`;

export const SinInLink = styled(RouteLink)`
  border: 1px solid #929292;
`;
