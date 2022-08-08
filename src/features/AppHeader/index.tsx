import { FC } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation';
import { Logo } from '../../assets/icons/logo';
import { AppPagePath } from '../../pages/AppPagePath';
import Auth from '../../features/Auth';

import { Header } from './styles';

const AppHeader: FC = () => {
  return (
    <Header>
      <Link to={AppPagePath.HOME}>
        <Logo />
      </Link>
      <Navigation />
      <Auth />
    </Header>
  );
};

export default AppHeader;
