import Article from './Article';

function Page(props){
    //map over it instead of this!
    //Actually going to pass in "article" to Article instead of "articles"
    return (
        <div className="page">
            <Article articles={props.articles} setArticles={props.setArticles}/>
            <Article /> 
            <Article />
            <Article />
        </div>
    )
}
export default Page