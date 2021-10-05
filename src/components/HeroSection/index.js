import { React, useState, useRef } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg,
        HeroP, HeroH1, HeroBtnWrapper,
        Button, HeroContent, ArrowForward,
        ArrowRight
} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }
    const videoRef = useRef();
    const setPlayBack = () => {
        videoRef.current.playbackRate = .7;
    };

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={ Video } 
                    ref={ videoRef }
                    onCanPlay={ () => setPlayBack() }
                    type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a new account today and recieve $250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover} 
                                big='false'
                                primary='true'
                                fontBig='true'                    
                    >
                        Get Started { hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
