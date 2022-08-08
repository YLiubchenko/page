import { FC } from 'react';

import Button from '../../../components/Button';

import { JoinDiv, TitleH2 } from './styles';

const JoinBlock: FC = () => {
  const btnText = 'Join now!';

  return (
    <JoinDiv>
      <TitleH2>Join over 850,000 members on the road to better health.</TitleH2>
      <Button text={btnText} />
    </JoinDiv>
  );
};

export default JoinBlock;
