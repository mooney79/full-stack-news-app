import Article from './Article/Article';
import Spinner from 'react-bootstrap/Spinner';

function PageCon(props){
    
        let posts;
        let conPosts;
        if (props.articles !== {}){
            conPosts = props.articles.filter(post => post.category1 === "con" || post.category2 === "con" || post.category3 === "con")
            posts = conPosts.map(post => <Article key={post.id+9000} {...post} articles={props.articles} setArticles={props.setArticles} />)
        } else {
            posts = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
        }

        return (
            <div className="page">
                <div className="article col-12">
                    {posts}
                </div>
            </div>
        )
    }
    export default PageCon