import React from 'react';
import { Nav, NavbarContainer, NavLogo, 
    MenuIcon, NavMenu, NavItem, 
    NavLink, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = (props) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={ scroll.scrollToTop }>Transact</NavLogo>
                    <MenuIcon onClick={props.toggle}>
                        <FaBars />
                    </MenuIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='discover'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='newsletter'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >Newsletter</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink secondary>Sign In</NavBtnLink>
                        <NavBtnLink>Sign Up</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};
export default Navbar;