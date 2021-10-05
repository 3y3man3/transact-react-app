import React from 'react';
import { ServicesContainer, ServicesH1, CardWrapper,
        Card, CardIcon, CardH2,
        CardP
} from './ServicesElements';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-3.svg';

export const ServicesSection = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <CardWrapper>
                <Card>
                    <CardIcon src={ Icon1 }/>
                    <CardH2>Reduce Expenses</CardH2>
                    <CardP>
                        We help reduce your fees and increase your overall revenue
                    </CardP>
                </Card>
                <Card>
                    <CardIcon src={ Icon2 }/>
                    <CardH2>Premium Account</CardH2>
                    <CardP>
                        Subscribe to our premium offer to profit from our new features
                    </CardP>
                </Card>
                <Card>
                    <CardIcon src={ Icon3 }/>
                    <CardH2>Unlimited Access</CardH2>
                    <CardP>
                        Have an unlimited access to our resources at any time
                    </CardP>
                </Card>
            </CardWrapper>
        </ServicesContainer>
    )
}
