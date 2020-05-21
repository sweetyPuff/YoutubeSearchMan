import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    list-style: none;
    z-index: -2;
    width: 50%;
    height: 45px;

    .sr-only {
        display: none;
    }

    a {
        text-decoration: none;
    }

    .pagination {
        display: inline-flex;
        justify-content: center;
    }

    .page-item .page-link {
        border-radius: 50%;
    }
    .page-item.active .page-link {
        z-index: -1;
        color: white;
        border-color: rgba(45,182,124);
        background-color: rgba(45,182,124);
    }
    .page-link {
        z-index: 0;
        font-weight: bolder;
        border-radius: 50%;
        background-color: white;
        border-color: white;
        color: #545454;
        position: inherit;
        margin-left: 2px;
        font-size: 20px;
        padding: 4px 12px;
    }

    @media (max-width: 568px) {
        margin-top: 10%;
        .page-link {
            font-size: 18px ;
            padding: 2px 8px;
        }
    }
`;

    