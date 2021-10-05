import styled, {css} from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    background: #000;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    display: grid;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    transition: .3s ease-in;
`;

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    transition: .3s ease;
    
    &:hover{
        color: #01bf71;
        transition: .3s ease;
    }
`;

export const SidebarWrapper = styled.div`
    font-family: Montserrat, sans-serif;
`;

export const SidebarMenu = styled.ul`

    text-align: center;
    list-style: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    align-items: center;
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    transition: .3s ease;
    color: #fff;

    &:hover{
        color: #01bf71;
        transition: .3s ease;
    }
`;

export const SidebarBtn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 60px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
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