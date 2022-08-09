import { FC } from 'react';

import { AppPagePath } from '../../../pages/AppPagePath';
import JoinLink from '../JoinLink';

import { AuthNavDiv, SinInLink } from './styles';

const Auth: FC = () => {
  return (
    <AuthNavDiv>
      <SinInLink to={AppPagePath.SIGNIN}>Sign in</SinInLink>
      <JoinLink text="Join now!" />
    </AuthNavDiv>
  );
};

export default Auth;
