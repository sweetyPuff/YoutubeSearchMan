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
        margin-top: 10%;
        .content-wrapper li {
            width: 42% ;
            margin: 2%;
            padding: 2%;
        }
    }

    @media (max-width: 568x) {
        .content-wrapper li {
            width: 90% ;
            margin: 2%;
            padding: 2%;

        }
    }

    .alert-msg-img-cotainer {
        text-align: center;
        padding: 10px 0;
        .loading-img {
            width: 60px;
            height: 60px;
            margin-top: calc(23vh);
            animation: spin_keyframes 0.7s infinite;
        }
        .error-img {
            height: 150px;
            width: 150px;
            margin-bottom: 10px;
            margin-top: calc(23vh);
        }
        .error-msg {
            font-size: 20px;
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
        .alert-msg-img-cotainer {
            .loading-img {
                width: 80px ;
                height: 80px;
            }
            .error-img {
                width: 100px ;
                height: 100px;
            }
            .error-msg {
                font-size: 18px;
            }
        }
    }

    @media (max-width: 568px) {
        .alert-msg-img-cotainer {
            .loading-img {
                width: 60px ;
                height: 60px;
            }
            .error-img {
                width: 60px ;
                height: 60px;
            }
            .error-msg {
                font-size: 16px;
            }
        }
    }

`;