import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 870px) {
        padding-top: 32px;
        // width:100%;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 870px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 16px 20px;
    text-align: left;
    width: 150px;
    color: #fff;
    font-family: Montserrat, sans-serif;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    transition: .3s ease-out;
    color: #fff;

    &:hover{
        color: #01bf71;
        transition: .3s ease-out;
    }
`
export const SocialMediaIcon = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 20px;
    transition: .3s ease-out;
    color: #fff;

    &:hover{
        color: #01bf71;
        transition: .3s ease-out;
    }
`

export const WebsiteRights = styled.small`
    font-family: Nunito, sans-serif;
    font-size: 1rem;
    color: #fff;
`

export const IconToTop = styled(Link)`
    margin: auto;
    font-size: 2rem;
    color: #01bf71;
    cursor: pointer;
    // width:100%;
    // heght:100%;

    @media screen and (max-width: 860px) {
        margin-left: 20px;
    }
`