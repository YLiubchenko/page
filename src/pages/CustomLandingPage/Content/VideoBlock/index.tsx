import { FC } from 'react';
import ReactPlayer from 'react-player';

import { VideoDiv } from './styles';

interface IProps {
  url: string;
}

const VideoBlock: FC<IProps> = ({ url }) => {
  return (
    <VideoDiv>
      <ReactPlayer allowFullScreen url={url} width="100%" />
    </VideoDiv>
  );
};

export default VideoBlock;
