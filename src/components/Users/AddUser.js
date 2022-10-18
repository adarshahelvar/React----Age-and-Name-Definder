import React, {useState} from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) =>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event )=>{
        event.preventDefault();
        if (enteredUsername.trim() === 0 || enteredAge.trim() === 0) {
            return;
        }
        if(+enteredAge < 1 ){
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');

    }

    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    return (
        <div>
        <ErrorModal title = "An error occured" message= "Something went wrong"/>
        <Card className = {classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={enteredAge} onChange ={ageChangeHandler}/>
        <Button type="submit" id="">Submit</Button>
    </form>
    </Card>
    </div>
    )
}

export default AddUser;