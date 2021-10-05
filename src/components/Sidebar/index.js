import React from 'react';
import { 
    SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarMenu, SidebarLink,
    SidebarBtn, SidebarRoute
} from './SidebarElements';

const Sidebar = (props) => {
    return (
        <SidebarContainer isOpen = {props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80} onClick={props.toggle}>About</SidebarLink>
                    <SidebarLink to='discover'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} onClick={props.toggle}
                    >Discover</SidebarLink>
                    <SidebarLink to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80} onClick={props.toggle}
                    >Services</SidebarLink>
                    <SidebarLink to='newsletter'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} onClick={props.toggle}
                    >Newsletter</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarRoute secondary>Sign In</SidebarRoute>
                    <SidebarRoute>Sign Up</SidebarRoute>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
