import { FC } from 'react';

import { AuthNavDiv, SinInLink, SinUpLink } from './styles';
import { AppPagePath } from '../../pages/AppPagePath';

const Auth: FC = () => {
  return (
    <AuthNavDiv>
      <SinInLink to={AppPagePath.SIGNIN}>Sign in</SinInLink>
      <SinUpLink to={AppPagePath.JOIN_NOW}>Join now!</SinUpLink>
    </AuthNavDiv>
  );
};

export default Auth;
