import styled, { keyframes } from "styled-components";
import { tablet, desktop, widescreen } from "../../responsive";

export const ComponentContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 140px 16px;    
    ${tablet({ margin: "140px 32px" })}
    ${desktop({ margin: "140px 60px" })}
    ${widescreen({ margin: "140px 696px" })}
`;

export const SectionTitle = styled.h1`
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    display: flex;
    align-items: flex-end;
    text-align: center; 
    color: rgba(0, 0, 0, 0.87);
`;

export const UsersCardsContainer = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    margin: 50px 6px;
    ${tablet({
        flexWrap: "wrap",
        flexDirection: "row",
        margin: "50px -8px",
        
    })};
    ${desktop({
        flexWrap: "wrap",
        flexDirection: "row",
        margin: "50px -14.5px",
        
    })};
    ${widescreen({
        flexWrap: "wrap",
        flexDirection: "row",
        margin: "50px -14.5px",
    })}
`;

export const UserCard = styled.div`
    width: 100%;
    max-width: 100%;
    height: 254px;    
    background: #FFFFFF;
    border-radius: 10px;
    flex: 100%;
    margin: 10px;
    ${tablet({maxWidth: "50%", flex: "45%", margin: "8px",})};
    ${desktop({maxWidth: "33.3%", flex: "30%", margin: "14.5px", })}
    ${widescreen({maxWidth: "33.3%", flex: "30%", margin: "14.5px",})}
`;

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
`;

export const UserImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 70px;
    object-fit: cover;
`;

const TextField = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`;

export const UserName = styled(TextField)`
    width: 100%;
    max-width: 200px;
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.87);
    margin-top: 20px;
    text-align: center;
`;

export const UserDetailsContainer = styled.div`
    width: 100%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.87);
    margin-top: 20px; 
`;

export const UserJobTitle = styled(TextField)``;

export const UserEmail = styled(TextField)``;

export const UserPhone = styled(TextField)``;

export const Button = styled.button`
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.img`
    width: 34px;
    height: 34px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
`;

