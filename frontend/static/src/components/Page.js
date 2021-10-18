import Article from './Article';

function Page(props){
    return (
        <div className="page">
        I'm a page!
        <Article />
        <Article />
        <Article />
        <Article />
        </div>
    )
}
export default Page