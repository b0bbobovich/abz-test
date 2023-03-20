import styled from "styled-components";
import { tablet, desktop, widescreen } from "../../responsive";

export const ComponentContainer = styled.div`
    height: 500px;
    ${desktop({ height: "650px" })},
    ${widescreen({height: "650px"})}
`;

export const BannerContainer = styled.div`
    height: 100%;
    background: 
        linear-gradient(0deg, rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)),
        url("https://drive.google.com/uc?export=view&id=1uOmYcdWalX0EmgQ6k6-5pqMMTf3yKL36");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    ${widescreen({
        margin: "0 695px"
    })}
`;

export const InfoContainer = styled.div`
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 16px;
    ${tablet({ margin: "89px 194px" })};
    ${desktop({ margin: "164px 322px" })};
    ${widescreen({margin: "164px 395px"})}
`;

export const BannerHeading = styled.h1`
    font-family : "Nunito";
    font-size: 40px;
    text-align: center;
    color: #FFFFFF;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 21px;
`;

export const BannerText = styled.p`
    font-family : "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 32px;
`;

export const Button = styled.button``;


