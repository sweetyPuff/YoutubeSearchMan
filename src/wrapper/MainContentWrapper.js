import styled from 'styled-components';

export const MainContentWrapper = styled.div`

    margin-top: 5%;
    margin: 0 auto;
    margin-bottom: 5%;
    content: normal;

    .content-list ul {
        display: inline-block;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .content-item {
        width: 29.3333%;
        float: left;
        margin: 1%;
        cursor: pointer;
        box-shadow: 0px 3px 5px #D3D3D3;
        padding: 1%;
    }

    @media(max-width: 768px) {
        .content-item {
        }
    }
`;