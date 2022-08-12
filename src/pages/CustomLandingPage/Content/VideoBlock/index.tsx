import { FC } from 'react';
import ReactPlayer from 'react-player';

import { VideoDiv } from './styles';

interface IProps {
  src: string;
}

const VideoBlock: FC<IProps> = ({ src }) => {
  return (
    <VideoDiv>
      <ReactPlayer url={src} width="100%" />
    </VideoDiv>
  );
};

export default VideoBlock;
