import styled from 'styled-components';

export const MainContentWrapper = styled.div`
    margin: 0 auto;
    margin-bottom: 5%;
    margin-top: 3%;
    content: normal;
    width: 100%;
    overflow: hidden;

    .content-wrapper, .content-list ul {
        display: inline-block;
    }

    .content-wrapper {
      width: 100%;
      & > ul {
        list-style: none;
        padding: 0;
      }
    }

    .content-wrapper li {
        width: 29.3333%;
        float: left;
        margin: 1%;
        cursor: pointer;
        box-shadow: 0px 3px 5px #D3D3D3;
        padding: 1%;
    }

    @media (max-width: 768px) {
        .content-wrapper li {
            width: 42% !important;
            margin: 2%;
            padding: 2%;
        }
    }

    @media (max-width: 576px) {
        .content-wrapper li {
            width: 90% !important;
            margin: 2%;
            padding: 2%;

        }
    }

`;