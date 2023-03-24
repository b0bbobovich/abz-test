import Header from "./components/Header";
import UsersSection from "./components/UsersSection";
import RegisterSection from "./components/RegisterSection"
import { useState } from "react";


function App() {
  const [registerStatus, setRegisterStatus] = useState(null);

  return (
    <>
      <Header setRegisterStatus={setRegisterStatus} />
      <UsersSection registerStatus={registerStatus} />
      <RegisterSection id="register-section" registerStatus={registerStatus} setRegisterStatus={setRegisterStatus} />
    </>
  )
}

export default App;
