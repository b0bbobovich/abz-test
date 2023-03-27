import React, { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import { publicRequest } from "../api/requestsMethods";
import successImage from "../assets/images/successImage.svg";


const RegisterSection = (props) => {

    const { registerStatus, setRegisterStatus } = props;

    const [positions, setPositions] = useState([]);
    const [token, setToken] = useState("");

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
                else {
                    console.error(err);
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
                else {
                    console.error(err);
                }
            }
        };
        getToken();
    }, [])

    return (
        <section className="register-section" id="register-section">
            {registerStatus !== "successfull"
                ?
                    <>
                        <h2 className="register-section__title">Working with POST request</h2>
                        <RegisterForm setRegisterStatus={setRegisterStatus} positions={positions} token={token} />
                    </>
                :
                    <>
                        <h2 className="register-section__title">User successfully registered</h2>
                        <img className="register-section__success-image" src={successImage} alt="register-successfull" />
                    </>
            }
        </section>
    )
}

export default RegisterSection