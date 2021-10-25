import Article from './Article/Article';
import Spinner from 'react-bootstrap/Spinner';

function PageCur(props){
    
        let posts;
        let curPosts;
        if (props.articles !== {}){
            curPosts = props.articles.filter(post => post.category1 === "cur" || post.category2 === "cur" || post.category3 === "cur")
            posts = curPosts.map(post => <Article key={post.id+9000} {...post} articles={props.articles} setArticles={props.setArticles} />)
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
    export default PageCur