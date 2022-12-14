import { FC } from 'react';

import { AppPagePath } from '../../pages/AppPagePath';

import { ItemNavLink, Nav, NavListUl } from './styles';

const Navigation: FC = () => {
  const activeItem = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');

  return (
    <Nav>
      <NavListUl>
        <li>
          <ItemNavLink className={activeItem} to={AppPagePath.HOME}>
            Home
          </ItemNavLink>
        </li>
        <li>
          <ItemNavLink className={activeItem} to={AppPagePath.MY_HEALTH}>
            My Health
          </ItemNavLink>
        </li>
        <li>
          <ItemNavLink className={activeItem} to={AppPagePath.CONDITIONS}>
            Conditions
          </ItemNavLink>
        </li>
        <li>
          <ItemNavLink className={activeItem} to={AppPagePath.TREATMENTS}>
            Treatments
          </ItemNavLink>
        </li>
        <li>
          <ItemNavLink className={activeItem} to={AppPagePath.BLOG}>
            Blog
          </ItemNavLink>
        </li>
      </NavListUl>
    </Nav>
  );
};

export default Navigation;
