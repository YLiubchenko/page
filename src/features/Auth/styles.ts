import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthNavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RouteLink = styled(Link)`
  padding: 10px 20px;
  font-size: 16px;
`;

export const SinInLink = styled(RouteLink)`
  border: 1px solid #929292;
`;

export const SinUpLink = styled(RouteLink)`
  background: #fee019;
  border: 1px solid #fee019;
  font-weight: 700;
`;
