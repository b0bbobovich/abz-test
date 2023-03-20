import {
    ComponentContainer,
    SectionTitle,
    UsersCardsContainer,
    UserCard,
    UserInfoContainer,
    UserImg,
    UserName,
    UserDetailsContainer,
    UserJobTitle,
    UserEmail,
    UserPhone,
    Button,
    Preloader
} from "./UsersSection.styled";
import { useState, useEffect } from "react";
import { publicRequest } from "../../api/requestsMethods";


const UsersSection = (props) => {
    const { registerSuccessfull } = props;
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("?page=1&count=6");
    const [nextURL, setNextURL] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await publicRequest().get("/users?page=1&count=6");
                console.log("response", response)
                const sortedUsers = sortByTimestamp(response.data.users);
                setUsers(sortedUsers);
                setNextURL(response.data.links.next_url);
            }
            catch (err) {
                if (err.response) {
                    console.error(`${err.response.status} ERROR`);
                }
                else if (err.request) {
                    console.error(err.request);
                }
                else {
                    console.error(err.message);
                }
            }
            finally {
                setIsLoading(false);
            }
        }

        if (registerSuccessfull) {
            fetchData();
        }

    }, [registerSuccessfull])

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await publicRequest().get("/users" + query);
                // console.log("response", response)
                const sortedUsers = sortByTimestamp(response.data.users);
                setUsers(previousUsers => [...previousUsers, ...sortedUsers]);
                setNextURL(response.data.links.next_url);
            }
            catch (err) {
                if (err.response) {
                    console.error(`${err.response.status} ERROR`);
                }
                else if (err.request) {
                    console.error(err.request);
                }
                else {
                    console.error(err.message);
                }
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();

    }, [query]);


    function sortByTimestamp(array) {
        return [...array].sort((a, b) => b.registration_timestamp
        - a.registration_timestamp
        );
    }

    function onShowMoreClicked() {
        if (nextURL) {
            const queryParams = nextURL.split("?")[1];
            setQuery("?" + queryParams)
        }
    }

    return (
        <ComponentContainer id="usersSection">
            <SectionTitle>Working with GET request</SectionTitle>
            <UsersCardsContainer>
                {users && (
                    users.map(user => (
                        <UserCard key={user.id}>
                            <UserInfoContainer>
                                <UserImg src={user.photo} onError={(e) => e.target.src=process.env.PUBLIC_URL + "/photoCover.svg"} />
                                <UserName>{user.name}</UserName>
                                <UserDetailsContainer>
                                    <UserJobTitle>{user.position}</UserJobTitle>
                                    <UserEmail>{user.email}</UserEmail>
                                    <UserPhone>{user.phone}</UserPhone>
                                </UserDetailsContainer>
                            </UserInfoContainer>
                        </UserCard>
                    )))
                }
            </UsersCardsContainer>
            {isLoading
                ? <Preloader src={process.env.PUBLIC_URL + "/preloaderLogo.svg"}/>
                : nextURL && <Button onClick = { onShowMoreClicked }>Show more</Button>               
            }
        </ComponentContainer>
    )
}

export default UsersSection