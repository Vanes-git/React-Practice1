import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEneteredUsername] = useState("");
    const [enteredAge, setEneteredAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEneteredUsername("");
        setEneteredAge("");
    };

    const usernameChangeHandler = (event) => {
        setEneteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEneteredAge(event.target.value);
    };

    return (
        <div>
            <ErrorModal title='An error occured' message='Something went wrong!'/>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>UserName</label>
                    <input
                        id='username'
                        type='text'
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    ></input>
                    <label htmlFor='age'>Add (Years)</label>
                    <input
                        id='age'
                        type='number'
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    ></input>
                    <Button type='submit'> Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
