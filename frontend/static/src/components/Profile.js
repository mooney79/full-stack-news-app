import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function Profile(props){
    const [user, setUser] = useState()

    async function fetchUser(){
        const response = await fetch(`http://127.0.0.1:8000/rest-auth/user/`, {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
          }
        });    
        if (response.ok){
            const data = await response.json();
            setUser(data);
        }
      }

    useEffect(() => {
        fetchUser()
    }, [])

    console.log(user);

    return (
        <>
        <h1> user.username</h1>
        <p>user.levels</p>
        </>
    )
}

export default Profile


//Ok, what do I need right now?  I need to pull in user data
//Let's start with that.

