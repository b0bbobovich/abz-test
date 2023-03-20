import styled,  { keyframes } from "styled-components";
import {tablet, desktop, widescreen} from "../../responsive";

export const ComponentContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 140px 16px 100px 16px;    
    ${tablet({ margin: "140px 32px 100px 32px" })}
    ${desktop({ margin: "140px 60px 100xp 60px" })}
    ${widescreen({ margin: "140px 695px 100px 695px"})}
`;

export const SuccessImg = styled.img`
    margin-top: 50px;
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


export const SubmitForm = styled.form`
    width: 100%;
    max-width: 380px;
    margin: 50px 0; 
`;

export const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.div`
    width: 100%;
    position: relative;
`;

export const Input = styled.input`
    height: 54px;
    width: 100%;
    background: #F8F8F8;    
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    padding-left: 16px; 
    box-sizing: border-box;
    margin-top: 50px;
    position: relative;
    outline: none;
    z-index: 1;
    &::placeholder {
        color: transparent;
    };
    &:focus {
        ${'' /* border: 2px solid teal; */}
    };
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        box-shadow: 0 0 0 30px white inset !important;
    };
`;

export const Label = styled.label`
    position: absolute;
    top: 69.5px;
    left: 16px;
    z-index: 2;
    pointer-events: none;
    padding: 0 5px;
    font-size: 15px;
    transition: 0.2s;
    color: #7E7E7E;
    ${Input}:focus ~ & {
        z-index: 10;
        top: 42.5px;
        ${'' /* color: teal; */}
        background: #F8F8F8;
    };
    ${Input}:not(:placeholder-shown) ~ & {
        z-index: 10;
        top: 42.5px;
        background: #F8F8F8;
    };
`;

export const HelperText = styled.span`
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7E7E7E;
    margin-left: 16px;
`;

export const ErrorText = styled.span`
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #CB3D40;
    margin-left: 16px;
`;

export const Fieldset = styled.fieldset`
    margin-top: 25px;
`;

export const FieldsetName = styled.legend`
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 4px;
`;

export const FieldsetItem = styled.div`
    display: flex;
    align-items: center;
    margin-top: 7px;
`;

export const RadioButton = styled.input`
    appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    border: 1px solid #D0CFCF;
    cursor: pointer;
    &:checked {
        border: 1px solid #00BDD3;
    }

    &::before {
        content: "";
        width: 10px;
        height: 10px;
        background: #00BDD3;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
    };

    &:checked:before {
        transform: scale(1);
    };
`;  

export const RadioLabel = styled.label`
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.87);
    margin-left: 12px;
`;

export const UploadContainer = styled.div`
    width: 100%;
    margin-top: 47px;
    height: 54px;
    background: #F8F8F8;
    display: flex;
    align-items: center;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    
`;

export const UploadButton = styled.label`
    height: 100%;
    width: 83px;
    min-width: 83px;
    border: 1px solid #000000DE;
    border-radius: 4px;
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
`;

export const UploadFileName = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    padding: 14px 16px;
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    &::placeholder{
        color: #7E7E7E;
    }
`;   

export const UploadInput = styled.input`
    display: none;
    
`;

export const Button = styled.button`
    background: #B4B4B4;
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



