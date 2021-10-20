import { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Login.css';

function LoginForm(props){
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    function handleInput(event) {
        const {name, value} = event.target;
        setUser(prevState => ({   //prevState is a variable name for the previous
            ...prevState,         //value of the state
            [name]:value,
        }))
    }

    function handleError(err){
        console.warn(err);
    }

//handle on-click to switch selection to "register" -- unbuilt
    
    async function handleSubmit(event) {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(user)
        };

        const response = await fetch('/rest-auth/login/', options).catch(handleError);
        if(!response){
            console.log(response);
        } else {
            const data = await response.json();
            Cookies.set('Authorization', `Token ${data.key}`); // This is bad mang.
            props.setIsAuth(true);
            props.history.push('/profile');  // This pushes the browser to the next area
        }
    
    }
    if (props.isAuth){  //Example of a redirect, but kind of balls user-friendly-wise.  Instead, replace login button with logout button
        return <Redirect to="/profile" />
    } //Could flip it to protect "profileForm" and redirect them to login

    return(

        <form className="mt-3 col-6" onSubmit={handleSubmit} >
            <div className="form-group text-left mb-3">
                <label htmlFor='username'>Username</label>
                <input type="text" 
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleInput}
                    required
                    name='username'
                    value={user.username}
                />
            </div>
            <div className="form-group text-left mb-3">
                <label htmlFor='password'>Password:</label>
                <input type="password" 
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleInput}
                    required
                    name='password'
                    value={user.password1}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3" >Log in</button>
            <button type="click" className="btn btn-primary mt-3" >Register</button>
        </form>

    )

}

export default withRouter(LoginForm)