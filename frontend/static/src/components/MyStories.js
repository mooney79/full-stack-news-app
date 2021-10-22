import Post from './Post/Post';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function MyStories(props){
    const [myStories, setMyStories] = useState([]);
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
    
  
   



    return (
        <div className="page">
            <div className="article col-12 text-center">
                <h2> Welcome Staff!  Your stories are below.</h2>
                <hr/>
            </div>
            <div>
                {myPosts}
            </div>
        </div>
    )
}
export default MyStories