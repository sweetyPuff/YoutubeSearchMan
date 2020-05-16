import styled from 'styled-components';

export const VideoImageWrapper = styled.div`

.img-container {
    background-image: url(${props => props.img});
    width: 100%;
    height: 360px;
}
`;