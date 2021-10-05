import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer,
        FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
        FooterLink, SocialMediaIcon, WebsiteRights,
        IconToTop
} from './FooterElements';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowCircleUp
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Testimonials</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                            <FooterLink>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink>Submit Videos</FooterLink>
                            <FooterLink>Ambassadors</FooterLink>
                            <FooterLink>Agency</FooterLink>
                            <FooterLink>Influencers</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink>Contact</FooterLink>
                            <FooterLink>Support</FooterLink>
                            <FooterLink>Destinations</FooterLink>
                            <FooterLink>Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <SocialMediaIcon><FaFacebook/></SocialMediaIcon>
                                <SocialMediaIcon><FaTwitter/></SocialMediaIcon>
                                <SocialMediaIcon><FaInstagram/></SocialMediaIcon>
                                <SocialMediaIcon><FaLinkedin/></SocialMediaIcon>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper><IconToTop to='/' onClick={ scroll.scrollToTop }><FaArrowCircleUp/></IconToTop>
</FooterLinksWrapper>
                </FooterLinksContainer>
                <WebsiteRights>Transact © 2021 All rights reserved</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}
