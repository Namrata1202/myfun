import React, { useState } from "react";

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

const[enteredUsername, setEnteredUsername] = useState('');
const[enteredUseage, setEnteredUserage] = useState('');
const[error, setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();
if(enteredUsername.trim().length === 0 || enteredUseage.trim().length === 0){
  setError({
    title: 'Invalid input',
    message: 'Please enter a valid name and  age'
  });
return;

}
if(+enteredUseage < 1){
  setError({
    title: 'Invalid age',
    message: 'Please enter a valid age(>0).'
  });
  return;
}

    console.log(enteredUsername,enteredUseage);
    setEnteredUsername('');
    setEnteredUserage('');
  };

  const userNameChangeHandler =(event) =>{
setEnteredUsername(event.target.value);

  }

  const userAgeChangeHandler = (event) =>{
setEnteredUserage(event.target.value);
  }

  const errorHandler = () => {
setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">username</label>
      <input id="uservame" type="text" value={enteredUsername} onChange={userNameChangeHandler} />
      <label htmlFor="age">Age(Years)</label>
      <input id="age" type="number" value={enteredUseage} onChange={userAgeChangeHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  );
};

export default AddUser;
