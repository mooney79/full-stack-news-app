import Article from './Article/Article';
import Spinner from 'react-bootstrap/Spinner';

function Page(props){

    // Keyword Args, 2 different endpoints, query parameters


    //map over it instead of this!
    //Actually going to pass in "article" to Article instead of "articles"

    //How to actually do this?
    //One endpoint, filter in Django.
    //If user, show published
    //If staff, show author===user
    //If superuser, show all
    // let visibleArticles;
    // if (props.user.is_staff==="true"){
    //     console.log('It evaluated True');
    // } else {
    //     console.log('It evaluated False');
    // }

    // articles=props.articles.filter(article => props.selection === msg.room_assoc);
    // let testing;
    // if (props.isStaff === true){
    //     testing = <h1>I AM STAFF!</h1>
    // }

    let posts;
    if (props.articles !== {}){
        posts = props.articles.map(post => <Article key={post.id+9000} {...post} articles={props.articles} setArticles={props.setArticles} />)
        // console.log(props.articles)
        // posts = <p>Returning a value</p>
    } else {
        posts = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }
    
    // return(
    //     <div className="article col-10">
    //         {posts}
    //     </div>

    // props.articles.filter()



    return (
        <div className="page">
            <div className="article col-12">
                {posts}
            </div>
        </div>
    )
}
export default Page