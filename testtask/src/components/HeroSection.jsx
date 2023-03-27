import { scrollToSection } from "../utils/scrolling";

const HeroSection = (props) => {
    const { setRegisterStatus } = props;

    return (
        <div className="banner">
            <div className="banner__info-container">
                <h1 className="banner__info-title">Test assignment for front-end developer</h1>
                <p className="banner__info-text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button onClick={(event) => {
                    setRegisterStatus(null);
                    event.preventDefault();
                    scrollToSection("register-section");
                }}>
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default HeroSection