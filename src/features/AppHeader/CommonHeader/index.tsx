import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AppPagePath } from '../../../pages/AppPagePath';
import { Logo } from '../../../assets/icons/logo';
import Navigation from '../../Navigation';
import Auth from '../Auth';

import { Header } from './styles';

const CommonHeader: FC = () => {
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

export default CommonHeader;
