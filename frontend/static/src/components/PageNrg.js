import Article from './Article/Article';
import Spinner from 'react-bootstrap/Spinner';

function PageNrg(props){
    
        let posts;
        let nrgPosts;
        if (props.articles !== {}){
            nrgPosts = props.articles.filter(post => post.category1 === "nrg" || post.category2 === "nrg" || post.category3 === "nrg")
            posts = nrgPosts.map(post => <Article key={post.id+9000} {...post} articles={props.articles} setArticles={props.setArticles} />)
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
    export default PageNrg