import React, { useState } from  'react';
        
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
    const newUser = { firstName,lastName, email, password,confirmPassword };
    console.log("Welcome", newUser);
    };

    const firstValid = () => (firstName.length >=2) ?true :false;    
    const lastValid = () => (firstName.length >=2) ?true :false;
    const emailValid = () => (email.length >=2) ?true :false;
    const passwordValid = () => (password.length >=8) ?true :false;
    const confirmPasswordValid = () => (confirmPassword === password) ?true :false;    

    return(
        <fieldset>       
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                    { firstValid()? "": <p>First Name must be at least 2 characters.</p>}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                    { lastValid()? "": <p>Last name must be at least 2 characters.</p>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    { emailValid()? "": <p>Email must be at least 2 characters.</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                    {passwordValid()? "": <p>Password must be at least 2 characters.</p>}
                    {confirmPasswordValid()? "": <p>Passwords do not match.</p>}
                </div>
                <div>
                    <label>ConfirmPassword: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </fieldset>
    );
};
    
export default UserForm;
