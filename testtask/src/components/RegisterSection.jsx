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

    return (
        <section className="register-section" id="register-section">
            {registerStatus !== "successfull"
                ?
                    <>
                        <h1 className="register-section__title">Working with POST request</h1>
                    <RegisterForm setRegisterStatus={setRegisterStatus} positions={positions} token={token} />
                    </>
                :
                    <>
                        <h1 className="register-section__title">User successfully registered</h1>
                        <img src={successImage} alt="register-successfull" />
                    </>
            }
        </section>
    )
}

export default RegisterSection