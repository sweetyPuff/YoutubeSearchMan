import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    max-width: 100%;
    background-color: rgba(45,182,124, 0.5);
    height: 100px;
    line-height: 100px;

    .input-region {
        width: 100%;
        text-align: center;
    }

    .input-region li {
        float: left;
    }

    input {
        width: 50%;
        color: gray;
        border: none;
        font-size: 25px;
        font-weight:bolder;
        background: transparent;
        border-bottom:1px solid gray;
        padding-bottom: 5px;
        &:focus {
            outline:none;
        }
    }

    @media (max-width: 768px) {
        input {
            font-size:20px !important;
        }
        .input-region img {
            width: 32px !important;
            height: 32px !important;
        }
    }

    @media (max-width: 576px) {
        input {
            font-size:16px !important;
        }
        .input-region img {
            width: 32px !important;
            height: 32px !important;
        }
    }

    img {
        margin-top: 10px;
        cursor: pointer;
    }

`;