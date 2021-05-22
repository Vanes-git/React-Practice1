import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEneteredUsername] = useState("");
    const [enteredAge, setEneteredAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    };

    const usernameChangeHandler = (event) => {
        setEneteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEneteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input
                    id='username'
                    type='text'
                    onChange={usernameChangeHandler}
                ></input>
                <label htmlFor='age'>Add (Years)</label>
                <input
                    id='age'
                    type='number'
                    onChange={ageChangeHandler}
                ></input>
                <Button type='submit'> Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
