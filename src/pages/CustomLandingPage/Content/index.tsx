import { FC, Fragment } from 'react';

import Line from '../../../components/Line/Line';
import { BlockType, IRowData } from '../../../shared/models/customLandingPage.model';
import useGetBlockByType from './useGetBlockByType';
import { useMobileMediaQuery } from '../../../shared/hooks/usMediaQueries.hooks';

import { ContentDiv } from './styles';

interface IProps {
  contentBlocks: IRowData[];
}

const Content: FC<IProps> = ({ contentBlocks }) => {
  const getBlockByType = useGetBlockByType();
  const { isMobile } = useMobileMediaQuery();

  return (
    <>
      {contentBlocks.map(({ right, left }, index) => {
        return (
          <Fragment key={index}>
            <ContentDiv>
              {isMobile && left.type === BlockType.TextBlock ? (
                <>
                  {getBlockByType(right)}
                  {getBlockByType(left)}
                </>
              ) : (
                <>
                  {getBlockByType(left)}
                  {getBlockByType(right)}
                </>
              )}
            </ContentDiv>
            <Line />
          </Fragment>
        );
      })}
    </>
  );
};

export default Content;
