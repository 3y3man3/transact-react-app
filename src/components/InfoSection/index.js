import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow,
        Column1, Column2, TextWrapper,
        TopLine, Heading, Subtitle,
        BtnWrap, ImgWrap, Img         
} from './InfoElements';
import { Button } from '../HeroSection/HeroElements';
// import mySVG from '../../images/svg-1.svg';


export const InfoSection = (props) => {
    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.headline}</Heading>
                                <Subtitle lightText={props.lightTextDesc}>{props.description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={props.primary ? 1 :0}
                                            big={true}
                                            dark={props.dark ? 1 : 0}
                                            fontBig={true}
                                    >{props.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={ props.alt } />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    )
}
