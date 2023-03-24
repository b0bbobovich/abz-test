import companyLogo from "../assets/images/companyLogo.svg";

const Navbar = (props) => {
    const { setRegisterStatus } = props;

    function scrollToSection(event) {
        event.preventDefault();
        const targetElement = document.getElementById(event.target.name)
        const { top, left } = targetElement.getBoundingClientRect() //get position on screen
        window.scrollTo({
            top: top + window.scrollY - 20,
            left: left + window.scrollX,
            behavior: "smooth"
        })
    }

    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <img src={companyLogo} alt="company-logo"/>
                <div className="navbar__buttons-container">
                    <button name="users-section" onClick={scrollToSection}>Users</button>
                    <button name="register-section" onClick={(event) => { setRegisterStatus(null); scrollToSection(event) }}>Sign up</button>
                </div>
            </div>
        </div>
    )
}


export default Navbar