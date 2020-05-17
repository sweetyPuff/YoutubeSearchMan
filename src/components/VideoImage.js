import React from 'react';
import { VideoImageWrapper } from '../wrapper/VideoImageWrapper';
import { excapeSpecialCharacter } from '../helper/helper';

export default (props) => {
    const snippet = props.video.snippet;
    return (
        <VideoImageWrapper img={snippet.thumbnails.medium.url}>
            <div className="img-container">
                <img src={snippet.thumbnails.medium.url} alt=""/>
            </div>
            <div className="title">{`${excapeSpecialCharacter(snippet.title)}`}</div>
            <div className="author">{`${excapeSpecialCharacter(snippet.channelTitle)}`}</div>
        </VideoImageWrapper>
    )
}