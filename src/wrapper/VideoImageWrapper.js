import styled from 'styled-components';

export const VideoImageWrapper = styled.div`

.img-container {
    width: 100%;
    height: 100%;
}

img {
    width: 100%;
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

@media (max-width: 768px) {
    .title {
        font-size: 16px !important;
    }
}

@media (max-width: 576px) {

}

`;