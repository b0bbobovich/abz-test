import styled from "styled-components";
import { mobile, tablet, desktop, widescreen } from "../../responsive";

export const ComponentContainer = styled.div`
    height: 60px;
    background: #FFFFFF;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin: 0 16px;
    ${tablet({ margin: "0 32px" })}
    ${desktop({ margin: "0 60px" })}
    ${widescreen({margin: "0 695px"})}
`;

export const Logo = styled.img``;

export const ButtonsContainer = styled.div`
    width: 210px;
    height: 34px;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button``;
