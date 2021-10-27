import AdminPost from './AdminPost/AdminPost';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from 'react-router-dom';

function MyDfts(props){
    const [myStories, setMyStories] = useState([]);
    const history = useHistory();
  
    let test;
    

    async function fetchMyStories(){
        const response = await fetch('/api_v1/articles/dfts/');
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
    // let myDrafts;
    if (myStories !== []){
        // myDrafts = props.articles.filter(post => post.phase === "dft");
        // myPosts = myDrafts.map(post => <Post key={post.id+8000} {...post} articles={props.articles} setArticles={props.setArticles} setArticleID={props.setArticleID}/>)
        myPosts = myStories.map(post => <AdminPost key={post.id+8000} {...post} articles={props.articles} setArticles={props.setArticles} setArticleID={props.setArticleID}/>)
    } else {
        myPosts = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }
    
    function handleClick(){
      history.push('/new');
    }
   



    return (
        <div className="page">
            <div className="article col-12 text-center">
                <h2> Welcome Administrator!</h2>
                <hr/>
            </div>
            <div>
                {myPosts}              
            </div>
            <button onClick={handleClick} className="btn btn-primary mb-5" id="new-story-btn">Create New Article</button>
        </div>
    )
}
export default MyDfts

// Add a NEW STORY button, and implement it

