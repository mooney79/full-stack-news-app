import Post from './Post/Post';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from 'react-router-dom';

function MyStories(props){
    const [myStories, setMyStories] = useState([]);
    const history = useHistory();
  
    let test;

    async function fetchMyStories(){
        const response = await fetch('/api_v1/articles/personal/');
        if (response.ok){
            const data = await response.json();
            test=data;
            setMyStories(test);
        }
      };

    useEffect(() => {
       fetchMyStories(); 
    }, []);
    
    
  
    let myPosts;
    if (myStories !== []){
        myPosts = myStories.map(post => <Post key={post.id+8000} {...post} articles={props.articles} setArticles={props.setArticles} setArticleID={props.setArticleID}/>)
    } else {
        myPosts = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }
    
    function handleClick(){
      history.push('/new');
    }
   



    return (
        <div className="page">
            <div className="article col-12 text-center">
                <h2> Welcome Staff!  Your stories are below.</h2>
                <hr/>
            </div>
            <div>
                {myPosts}
                <button onClick={handleClick}>Create New Article</button>
            </div>
        </div>
    )
}
export default MyStories

// Add a NEW STORY button, and implement it.