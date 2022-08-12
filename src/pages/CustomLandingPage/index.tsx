import React, { FC } from 'react';

import HeaderInfoBlock from './HeaderInfoBlock';
import Content from './Content';
import FormBlock from './FormBlock';
import Addition from './Addition';
import JoinBlock from './JoinBlock';
import { IAddition, IBottomCTA, IForm, IHero, IRowData } from '../../shared/models/customLandingPage.model';

import { AppWrapperDiv } from '../../styles';

interface IProps {
  hero: IHero;
  contentBlocks: IRowData[];
  form: IForm;
  additionalServices: IAddition;
  bottomCTA: IBottomCTA;
}

const CustomLandingPage: FC<IProps> = ({ hero, contentBlocks, form, additionalServices, bottomCTA }) => {
  return (
    <>
      <HeaderInfoBlock {...hero} />
      <AppWrapperDiv>
        <Content contentBlocks={contentBlocks} />
      </AppWrapperDiv>
      <FormBlock {...form} />
      <AppWrapperDiv>
        <Addition {...additionalServices} />
        <JoinBlock {...bottomCTA} />
      </AppWrapperDiv>
    </>
  );
};

export default CustomLandingPage;
