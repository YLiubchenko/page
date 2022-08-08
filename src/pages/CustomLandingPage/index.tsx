import React from 'react';

import HeaderInfoBlock from './HeaderInfoBlock';
import Content from './Content';
import EmailBlock from './EmailBlock';
import Addition from './Addition';
import JoinBlock from './JoinBlock';

import { AppWrapperDiv } from '../../styles';

const CustomLandingPage = () => {
  return (
    <>
      <HeaderInfoBlock />
      <AppWrapperDiv>
        <Content />
      </AppWrapperDiv>
      <EmailBlock />
      <AppWrapperDiv>
        <Addition />
        <JoinBlock />
      </AppWrapperDiv>
    </>
  );
};

export default CustomLandingPage;
