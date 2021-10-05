import styled from 'styled-components';

export const ServicesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #010606;
    font-family: Montserrat, sans-serif;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    margin: 60px auto;
    font-weight: 700;
    color: #fff;

    @media screen and (max-width: 868px) {
        font-size: 2rem;
    }
`;

export const CardWrapper = styled.div`
    display: grid;
    max-width: 1000px;
    margin: 0px auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 40px;
    padding: 0 50px;
    margin-bottom: 100px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    background: #fff;
    color: #000;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.05);
        transition: all .2s ease-in-out;
        cursor: pointer;        
    }
`;

export const CardIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const CardH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const CardP = styled.p`
    font-size: 1rem;
`;
