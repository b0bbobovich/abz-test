import React, { useEffect, useState } from "react";
import {
    ComponentContainer,
    SectionTitle, 
    SubmitForm,
    InputsContainer,
    InputContainer,
    Input,
    Label,
    HelperText,
    ErrorText,
    Fieldset,
    FieldsetName,
    FieldsetItem,
    RadioButton,
    RadioLabel,
    UploadContainer,
    UploadButton,
    UploadFileName,
    UploadInput,
    Button, 
    Preloader,
    SuccessImg
} from "./RegisterSection.styled";
import { authorizedRequest, publicRequest } from "../../api/requestsMethods";


const RegisterSection = (props) => {

    const { registerSuccessfull, setRegisterSuccessfull } = props;
    const [fileName, setFileName] = useState("Upload your photo");
    const [positions, setPositions] = useState([]);
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [usernameInputError, setUsernameInputError] = useState("");
    const [emailInputError, setEmailInputError] = useState("");
    const [phoneInputError, setPhoneInputError] = useState("");
    const [photoInputError, setPhotoInputError] = useState("");


    useEffect(() => {
        async function fetchPositions() {
            try {
                const response = await publicRequest().get("/positions");
                // console.log("response", response)
                setPositions(response.data.positions);
            }
            catch (err) {
                if (err.response) {
                    console.error("ERROR:", err.response.status);
                }
                else if (err.request) {
                    console.error(err.request);
                }
                else {
                    console.error(err.message);
                }
            }
        };
        fetchPositions()
    }, [])

    useEffect(() => {
        async function getToken() {
            try {
                const response = await publicRequest().get("/token");
                // console.log("Get Token", response)
                setToken(response.data.token);
            }
            catch (err) {
                if (err.response) {
                    console.error(err.response.status);
                }
                else if (err.request) {
                    console.error(err.request);
                }
                else {
                    console.error("Error", err.message);
                }
            }
        };
        getToken();
    }, [])

    function validateInputs(form) {
        const regEx = {
            // eslint-disable-next-line no-control-regex
            email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
            phone: /^[+]{0,1}380([0-9]{9})$/
        };
        function validatePhoto(input) {
            if (input.files[0]) {
                const last_dot = input.value.lastIndexOf('.');
                const extension = input.value.slice(last_dot + 1);
                const isExtensionValid = extension === "jpg" || extension === "jpeg";
                const photoSize = input.files[0].size / 1000000;
                const isSizeValid = photoSize < 5;
                const isPhotoPxSizesValid = true;
                return isExtensionValid && isSizeValid && isPhotoPxSizesValid
            }
            return false
        }

        const isUsernameValid = form.username.value.length > 1 && form.username.value.length <= 60;
        !isUsernameValid && setUsernameInputError("Username should contain 2-60 characters");
        const isEmailValid = regEx.email.test(form.email.value);
        !isEmailValid && setEmailInputError("Must be a valid email according to RFC2822");
        const isPhoneValid = regEx.phone.test(form.phone.value);
        !isPhoneValid && setPhoneInputError("Phone number should start with +380 and contain 9 numbers");
        const isPhotoValid = validatePhoto(form.photo);
        !isPhotoValid && setPhotoInputError("Photo must be jpeg/jpg type. The photo size must not be greater than 5 Mb");
        
        return isUsernameValid && isEmailValid && isPhoneValid && isPhotoValid
    }
    
    function prepareFormData(form) {
        const position_id = positions.find(position => position.name === form.position.value).id;
        const userPhoto = form.photo.files[0];
        const formData = new FormData();
        formData.append("name", form.username.value);
        formData.append("email", form.email.value);
        formData.append("phone", form.phone.value);
        formData.append("position_id", position_id);
        formData.append("photo", userPhoto, userPhoto.name);
        return formData
    };
    

    async function handleSubmit(event) {
        event.preventDefault();
        const isFormValid = validateInputs(event.target);
        if (isFormValid) {
            setIsLoading(true);
            const payload = prepareFormData(event.target);
            try {
                await authorizedRequest(token).post("/users", payload);
                // console.log(response)
                setFileName("Upload your photo");
                setRegisterSuccessfull(true);
            }
            catch (err) {
                if (err.response) {
                    console.error("ERROR:", err.response.status );
                }
                else if (err.request) {
                    console.error(err.request);
                }
                else {
                    console.error(err.message);
                }
            }
            finally {
                setIsLoading(false); 
            }
        }
    }

    if (registerSuccessfull) {
        return (
            <ComponentContainer id="registerSection">
                <SectionTitle>User successfully registered</SectionTitle>
                <SuccessImg src={process.env.PUBLIC_URL + "/successImage.svg"}/>
            </ComponentContainer>
        )
    }

    return (
        <ComponentContainer id="registerSection">
            <SectionTitle>Working with POST request</SectionTitle>
            <SubmitForm id="register-form" onSubmit={handleSubmit}>
                <InputsContainer>
                    <InputContainer>
                        <Input id="username" name="username" type="text" placeholder="Your name" required onKeyUp={() => setUsernameInputError("")} />
                        <Label htmlFor="username">Your name</Label>
                        {usernameInputError &&
                            <ErrorText>{usernameInputError}</ErrorText>
                        }
                    </InputContainer>
                    <InputContainer>
                        <Input id="email" name="email" type="email" placeholder="Email" required onKeyUp={() => setEmailInputError("")}/>
                        <Label htmlFor="email">Email</Label>
                        {emailInputError &&
                            <ErrorText>{emailInputError}</ErrorText>
                        }
                    </InputContainer>
                    <InputContainer>
                        <Input id="phone" name="phone" type="tel" placeholder="Phone" required onKeyUp={() => setPhoneInputError("")}/>
                        <Label htmlFor="phone">Phone</Label>
                        {phoneInputError
                            ? <ErrorText>{phoneInputError}</ErrorText>
                            : <HelperText>+38 (XXX) XXX - XX - XX</HelperText>
                        }
                    </InputContainer>
                </InputsContainer>
                <Fieldset>
                    <FieldsetName>Select your position</FieldsetName>
                    {positions &&
                        (positions.map((item, index) => (
                            <FieldsetItem key={index}>
                                <RadioButton name="position" type="radio" id={item.id} value={item.name} required defaultChecked={index === 0}/>
                                <RadioLabel htmlFor={item.name}>{item.name}</RadioLabel>
                            </FieldsetItem>
                        )
                        ))}
                </Fieldset>
                <UploadContainer>
                    <UploadButton htmlFor="file-upload">Upload</UploadButton>
                    <UploadFileName id="file-selected" placeholder={fileName} disabled/>
                    <UploadInput
                        id="file-upload"
                        name="photo"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e) => {
                            setFileName(e.target.files.item(0).name);
                            setPhotoInputError("");
                        }} 
                        />
                </UploadContainer>
                {photoInputError &&
                            <ErrorText>{photoInputError}</ErrorText>
                }
            </SubmitForm>
            {isLoading
                ? <Preloader src={process.env.PUBLIC_URL + "/preloaderLogo.svg"}/>
                : <Button type="submit" form="register-form">Sign up</Button>            
            }
        </ComponentContainer>
    )
}

export default RegisterSection