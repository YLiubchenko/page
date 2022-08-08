import styled from 'styled-components';

export const TextDiv = styled.div`
  padding: 107px;

  @media (max-width: 870px) {
    &.mobile-reverse {
      order: 1;
    }
  }
`;

export const TitleH2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
`;

export const TextP = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
