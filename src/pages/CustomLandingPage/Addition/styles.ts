import styled from 'styled-components';

export const AdditionDiv = styled.div`
  margin-top: 20px;
`;

export const TitleH2 = styled.h2`
  font-family: 'Kameron';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 125px;
`;

export const AdditionContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 20px;
  grid-template-rows: repeat(2, auto);
  margin: 30px 0 25px;
`;
