import styled from "styled-components";

export const Container = styled.div`
    padding-left: 5px;
    padding-right: 5px;

    @media screen and (min-width: 320px) {
        max-width: 310px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 768px) {
        max-width: 700px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1100px;
    }
`;

export const Header = styled.header`
    text-align: center;
    background-color: ${p => p.theme.colors.accent};

    @media screen and (min-width: 320px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    @media screen and (min-width: 1200px) {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

export const Main = styled.main`
    text-align: center;
    background-color: ${p => p.theme.colors.background};

    @media screen and (min-width: 320px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    @media screen and (min-width: 1200px) {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;