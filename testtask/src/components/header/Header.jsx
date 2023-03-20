import { ComponentContainer } from "./Header.styled";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

const Header = (props) => {
    const { setRegisterSuccessfull } = props;
    return (
        <ComponentContainer>
            <Navbar setRegisterSuccessfull={setRegisterSuccessfull} />
            <Banner setRegisterSuccessfull={setRegisterSuccessfull} />
        </ComponentContainer>
    )
}

export default Header
