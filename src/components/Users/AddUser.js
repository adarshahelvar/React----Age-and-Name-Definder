import React, {useState, useRef} from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) =>{
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event )=>{
        event.preventDefault();
        const enteredName = (nameInputRef.current.value);
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim() === 0 || enteredUserAge.trim() === 0) {
            setError ({
                title: 'Invaild Input',
                message: 'Please enter a valid Name and Age'
            });
            return;
        }
        if(+enteredUserAge < 1 ){
            setError ({
                title: 'Invaild Age',
                message: 'Please enter a valid Age'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';

    }

    const errorHandler = () =>{
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModal title = {error.title} message= {error.message} onConfirm={errorHandler}/>}
        <Card className = {classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username"  ref={nameInputRef} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" ref={ageInputRef}/>
        <Button type="submit" id="">Submit</Button>
    </form>
    </Card>
    </div>
    )
}

export default AddUser;