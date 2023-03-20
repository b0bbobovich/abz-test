import {
    ComponentContainer,
    InfoContainer,
    BannerContainer,
    BannerHeading,
    BannerText,
    Button
} from "./Banner.styled";

const Banner = (props) => {
    const { setRegisterSuccessfull } = props;

    function scrollToSection(event) {
        event.preventDefault();
        const targetElement = document.getElementById("registerSection")
        const { top, left } = targetElement.getBoundingClientRect() //get position on screen
        window.scrollTo({
            top: top + window.scrollY - 20,
            left: left + window.scrollX,
            behavior: "smooth"
        })
    }

    return (
        <ComponentContainer>
            <BannerContainer>
                <InfoContainer>
                    <BannerHeading>Test assignment for front-end developer</BannerHeading>
                    <BannerText>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</BannerText>
                    <Button onClick={(event) => { setRegisterSuccessfull(); scrollToSection(event) }}>Sign up</Button>
                </InfoContainer>
            </BannerContainer>
        </ComponentContainer>
    )
}

export default Banner