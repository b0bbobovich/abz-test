import companyLogo from "../assets/images/companyLogo.svg";
import { scrollToSection } from "../utils/scrolling";

const Header = (props) => {
    const { setRegisterStatus } = props;

    return (
        <header className="navbar">
            <div className="navbar__wrapper">
                <img className="navbar__logo" src={companyLogo} alt="company-logo"/>
                <div className="navbar__buttons-container">
                    <button onClick={event => {
                        event.preventDefault();
                        scrollToSection("users-section")
                    }}>
                        Users
                    </button>
                    <button onClick={(event) => {
                        setRegisterStatus(null);
                        event.preventDefault();
                        scrollToSection("register-section")
                    }}>
                        Sign up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
