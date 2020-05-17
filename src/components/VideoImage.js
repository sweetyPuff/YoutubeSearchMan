import React from 'react';
import { VideoImageWrapper } from '../wrapper/VideoImageWrapper';
import { excapeSpecialCharacter } from '../helper/helper';

export default (props) => {
    const snippet = props.video.snippet;
    return (
        <VideoImageWrapper img={snippet.thumbnails.high.url}>
            <div className="img-container"></div>
            <div className="title">{`${excapeSpecialCharacter(snippet.title)}`}</div>
            <div className="author">{`${excapeSpecialCharacter(snippet.channelTitle)}`}</div>
        </VideoImageWrapper>
    )
}