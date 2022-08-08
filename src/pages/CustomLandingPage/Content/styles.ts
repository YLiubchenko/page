import styled from 'styled-components';

export const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(315px, auto);
  grid-gap: 18px 20px;
  margin-top: 20px;

  @media (max-width: 870px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyPlayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 100%;
  }
`;
