import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    max-width: 100%;
    background-color: rgba(45,182,124, 0.5);
    height: 80px;
    line-height: 100px;

    .input-region {
        width: 100%;
        text-align: center;
    }

    .input-region li {
        float: left;
    }

    .search-icon {
        width: 40px;
        height: 40px;
        margin-top: 8px;
        cursor: pointer;
    }

    input {
        width: 50%;
        color: gray;
        border: none;
        font-size: 20px;
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
            font-size:20px ;
        }
        .search-icon {
            width: 32px ;
            height: 32px ;
        }
    }

    @media (max-width: 568px) {
        input {
            font-size:16px ;
        }
        .search-icon {
            width: 32px ;
            height: 32px ;
        }
    }

`;