import {
    ComponentContainer,
    Wrapper,
    Logo,
    ButtonsContainer,
    Button
} from "./Navbar.styled";


const Navbar = (props) => {
    const { setRegisterSuccessfull } = props;

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
        <ComponentContainer>
            <Wrapper>
                <Logo src="https://drive.google.com/uc?export=view&id=1JIoA7abTW68r9lYicYSQKV2HMH-vLrvM"/>
                <ButtonsContainer>
                    <Button name="usersSection" onClick={scrollToSection}>Users</Button>
                    <Button name="registerSection" onClick={(event) => { setRegisterSuccessfull(false); scrollToSection(event) }}>Sign up</Button>
                </ButtonsContainer>
            </Wrapper>
        </ComponentContainer>
    )
}


export default Navbar