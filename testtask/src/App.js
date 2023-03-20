import "./App.css";
import Header from "./components/header/Header";
import UsersSection from "./components/users-section/UsersSection";
import RegisterSection from "./components/register-section/RegisterSection"
import { useState } from "react";


function App() {
  const [registerSuccessfull, setRegisterSuccessfull] = useState(false);

  return (
    <>
      <Header setRegisterSuccessfull={setRegisterSuccessfull} />
      <UsersSection registerSuccessfull={registerSuccessfull} />
      <RegisterSection id="registerSection"registerSuccessfull={registerSuccessfull} setRegisterSuccessfull={setRegisterSuccessfull} />
    </>
  )
}

export default App;
