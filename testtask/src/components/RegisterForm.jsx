import { useState } from "react";
import Preloader from "./Preloader";
import { authorizedRequest } from "../api/requestsMethods";
import { validateInputs } from "../utils/validations";
import { scrollToSection } from "../utils/scrolling";


const RegisterForm = (props) => {
    const { positions, setRegisterStatus, token } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState("Upload your photo");
    const [validationErrors, setValidationErrors] = useState({});

    
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

    function cleanValidationError(inputField) {
        setValidationErrors(prev => ({ ...prev, [inputField]: "" }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const validation = validateInputs(event.target);
        if (validation.success) {
            setIsLoading(true);
            const payload = prepareFormData(event.target);
            try {
                await authorizedRequest(token).post("/users", payload);
                // console.log(response)
                setFileName("Upload your photo");
                scrollToSection("users-section");
                setRegisterStatus("successfull");
            }
            catch (err) {
                if (err.response) {
                    console.error("ERROR:", err.response.status );
                }
                else {
                    console.error(err.message);
                }
                setRegisterStatus("unsuccessfull");
            }
            finally {
                setIsLoading(false); 
            }
        }
        else {
            setValidationErrors(validation.errors);
        }
    }

    return (
        <>
            <form className="register-form" id="register-form" onSubmit={handleSubmit}>
                <div className="register-form__text-inputs">
                    <div className="register-form__text-input-wrapper">
                        <input
                            className={validationErrors.username ? "register-form__text-input border-error" : "register-form__text-input"}
                            id="username" name="username"
                            type="text"
                            placeholder="Your name"
                            required
                            onKeyUp={(event) => cleanValidationError(event.target.name)} />
                        <label className={validationErrors.username ? "register-form__text-input-label label-error" : "register-form__text-input-label"} htmlFor="username">Your name</label>
                        {validationErrors.username &&
                            <small className="register-form__error-text">{validationErrors.username}</small>
                        }
                    </div>
                    <div className="register-form__text-input-wrapper">
                        <input
                            className={validationErrors.email ? "register-form__text-input border-error" : "register-form__text-input"}
                            id="email" name="email"
                            type="email"
                            placeholder="Email"
                            required
                            onKeyUp={(event) => cleanValidationError(event.target.name)}
                            />
                        <label className={validationErrors.email ? "register-form__text-input-label label-error" : "register-form__text-input-label"} htmlFor="email">Email</label>
                        {validationErrors.email &&
                            <small className="register-form__error-text">{validationErrors.email}</small>
                        }
                    </div>
                    <div className="register-form__text-input-wrapper">
                        <input
                            className={validationErrors.phone ? "register-form__text-input border-error" : "register-form__text-input"}
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            required
                            onKeyUp={(event) => cleanValidationError(event.target.name)} 
                            />
                        <label className={validationErrors.phone ? "register-form__text-input-label label-error" : "register-form__text-input-label"} htmlFor="phone">Phone</label>
                        {validationErrors.phone
                            ? <small className="register-form__error-text">{validationErrors.phone}</small>
                            : <small className="register-form__helper-text">+38 (XXX) XXX - XX - XX</small>
                        }
                    </div>
                </div>
                <fieldset className="register-form__radio-inputs">
                    <legend className="register-form__radio-inputs-title">Select your position</legend>
                    {positions &&
                        (positions.map((item, index) => (
                            <div className="register-form__radio-input-wrapper" key={index}>
                                <input
                                    className="register-form__radio-input"
                                    name="position"
                                    type="radio"
                                    id={item.id}
                                    value={item.name}
                                    required
                                    defaultChecked={index === 0} 
                                    />
                                <label className="register-form__radio-input-label" htmlFor={item.id}>{item.name}</label>
                            </div>
                        )
                        ))}
                </fieldset>
                <div className={validationErrors.photo ? "register-form__upload-inputs-wrapper border-error" : "register-form__upload-inputs-wrapper"}>
                    <label className={validationErrors.photo ? "register-form__upload-input-label border-error" : "register-form__upload-input-label"} htmlFor="file-upload">Upload</label>
                    <span className={fileName === "Upload your photo" ? "register-form__upload-placeholder" : "register-form__upload-placeholder active-placeholder"}>{fileName}</span>
                    <input
                        className="register-form__upload-input"
                        id="file-upload"
                        name="photo"
                        type="file"
                        accept="image/jpeg, image/jpg"
                        onChange={(event) => {
                            setFileName(event.target.files.item(0).name);
                            cleanValidationError(event.target.name)
                        }} 
                        />
                </div>
                {validationErrors.photo &&
                    <small className="register-form__error-text">{validationErrors.photo}</small>
                }
            </form>
            {isLoading
                ? <Preloader />
                : <button className="register-form__submit-button" type="submit" form="register-form">Sign up</button>            
            }
        </>
        
    )
}

export default RegisterForm