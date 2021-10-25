

function SideArticle(props){
    return (
        <aside className="sidebar-article" id={props.id}>
            <h3>{props.headline}</h3>
            <p>{props.text}</p>
        </aside>
    )
}
export default SideArticle


