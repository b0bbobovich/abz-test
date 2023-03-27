import UsersCards from "./UsersCards";
import Preloader from "./Preloader";
import { useState, useEffect } from "react";
import { publicRequest } from "../api/requestsMethods";


const UsersSection = (props) => {
    const { registerStatus } = props;
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("?page=1&count=6");
    const [nextURL, setNextURL] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await publicRequest().get("/users?page=1&count=6");
                // console.log("response", response)
                const sortedUsers = sortByTimestamp(response.data.users);
                setUsers(sortedUsers);
                setNextURL(response.data.links.next_url);
            }
            catch (err) {
                if (err.response) {
                    console.error(`${err.response.status} ERROR`);
                }
                else {
                    console.error(err.message);
                }
            }
            finally {
                setIsLoading(false);
            }
        }

        if (registerStatus === "successfull") {
            fetchData();
        }
    }, [registerStatus])

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
                else {
                    console.error(err);
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

    function onShowMoreBtnClicked() {
        if (nextURL) {
            const queryParams = nextURL.split("?")[1];
            setQuery("?" + queryParams)
        }
    }

    return (
        <section id="users-section" className="users-section">
            <h2 className="users-section__title">Working with GET request</h2>
            <UsersCards users={users} />
            {isLoading
                ? <Preloader />
                : nextURL && <button onClick = { onShowMoreBtnClicked }>Show more</button>               
            }
        </section>
    )
}

export default UsersSection