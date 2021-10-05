import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    position: sticky;
    z-index: 10;
    width: 100%;
    // margin-top: -80px;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    jusitfy-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    margin-left: 24px;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    font-family: Nunito, sans-serif;
`;

export const MenuIcon = styled.div`
    display:none;
    color: #fff;

    @media screen and (max-width: 868px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: auto;
    font-family: Montserrat, sans-serif;

    @media screen and (max-width: 868px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkS)`
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: 400;
    transition: color .3s ease;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    &:hover{
        color: #01bf71;
        transition: color .3s ease;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;

    @media screen and (max-width: 868px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 30px;
    color: #fff;
    font-size: 16px;
    ouline: none;
    border: none;
    text-decoration: none;
    transition: all .2s ease-in-out;

    &:hover{
        transition: all .2s ease-in-out;
        background: #fff;
        color: #01bf71;
    }

    ${props =>
        props.secondary &&
        css`
            background: #fff;
            color: #01bf71;

            &:hover{
                transition: all .2s ease-in-out;
                background: #01bf71;
                color: #fff;
            }
        `};
`;