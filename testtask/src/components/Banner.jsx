
const Banner = (props) => {
    const { setRegisterStatus } = props;

    function scrollToSection(event) {
        event.preventDefault();
        const targetElement = document.getElementById("register-section")
        const { top, left } = targetElement.getBoundingClientRect() //get position on screen
        window.scrollTo({
            top: top + window.scrollY - 20,
            left: left + window.scrollX,
            behavior: "smooth"
        })
    }

    return (
        <div className="banner">
            <div className="banner__info-container">
                <h1 className="banner__info-title">Test assignment for front-end developer</h1>
                <p className="banner__info-text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button onClick={(event) => { setRegisterStatus(null); scrollToSection(event) }}>Sign up</button>
            </div>
        </div>
    )
}

export default Banner