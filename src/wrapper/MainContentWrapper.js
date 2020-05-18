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

    .loading-img-cotainer {
        width: 100%;
        height: 100%;
        position: fixed;
        text-align: center;
        & img {
            width: 100px;
            height: 100px;
            margin-top: calc(40%);
            animation: spin_keyframes 0.7s infinite;
        }
    }

    .errorMsg {
        width: 20%;
        height: 10%;
        background-color: rgba(45,182,124);
        border-radius: 10px;
        line-height: 100px;
        text-align: center;
        &:hover {
            background-color: rgba(45,182,124, 0.5);
        }
    }

    @keyframes spin_keyframes {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }

    @media (max-width: 768px) {
        .loading-img-cotainer img {
            width: 80px !important;
            height: 80px;
        }
    }

    @media (max-width: 576px) {
        .loading-img-cotainer img {
            width: 40px !important;
            height: 40px;
        }
    }

`;