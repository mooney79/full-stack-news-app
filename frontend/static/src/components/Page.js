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
    } else {
        posts = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
    }

    // let adminTest;
    // if (props.isAdmin === true){
    //     adminTest = <h1>I AM ADMIN!</h1>
    // } else {
    //     adminTest = <h1>I AM NOT ADMIN!</h1>
    // }

    return (
        <div className="page">
            <div className="article col-12">
                {/* {adminTest} */}
                {posts}
            </div>
        </div>
    )
}
export default Page