import React from "react";

import AddUSer from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList';

function App() {
    return (
        <div>
            <AddUSer />
            <UsersList users={[]}/>
        </div>
    );
}

export default App;
