import styled from 'styled-components';

export const VideoImageWrapper = styled.div`

.img-container {
    background-image: url(${props => props.img});
    width: 100%;
    height: 360px;
}

.title {
    margin: 3% 0;
    font-size: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.author {
    color: gray;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

`;