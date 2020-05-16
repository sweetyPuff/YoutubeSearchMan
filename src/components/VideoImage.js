import React from 'react';
import { VideoImageWrapper } from '../wrapper/VideoImageWrapper';

export default (props) => {
    const snippet = props.video.snippet;
    return (
        <VideoImageWrapper img={snippet.thumbnails.high.url}>
            <div className="img-container"></div>
            <div className="title">{`${snippet.title.replace('&amp;', '&')}`}</div>
            <div className="author">{`${snippet.channelTitle.replace('&amp;', '&')}`}</div>
        </VideoImageWrapper>
    )
}