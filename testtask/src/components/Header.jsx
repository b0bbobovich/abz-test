import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = (props) => {
    const { setRegisterStatus } = props;
    return (
        <header>
            <Navbar setRegisterStatus={setRegisterStatus} />
            <Banner setRegisterStatus={setRegisterStatus} />
        </header>
    )
}

export default Header
