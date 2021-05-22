import React, { useState } from "react";

import AddUSer from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUsersHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <div>
            <AddUSer onAddUser={addUsersHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
