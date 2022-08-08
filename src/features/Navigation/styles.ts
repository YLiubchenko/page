import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  align-self: end;
`;

export const NavListUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 20px;
  margin: 0;
`;

export const ItemNavLink = styled(NavLink)`
  display: inline-block;
  height: 27px;
  text-transform: uppercase;

  font-size: 13px;
  color: #404040;
  &.active {
    border-bottom: 2px solid #fee019;
  }
`;
