import './Article.css';
// import Collapse from 'react-bootstrap/Collapse'
import { useState /*, useEffect, useCallback*/ } from 'react';

function Article(props){
    // const [open, setOpen] = useState(true);
    const [, updateState] = useState();
    // const forceUpdate = useCallback(() => updateState({}), []);
    // console.log(props);
    // setOpen(true);

    let articleHTML;                           // TEST (!!props.article.photo3)
    if (props.photo3 !== null){              //Set proper styling for each case
        articleHTML =    
        <article id="{props.id}">
            <img src={props.photo1} className="photo1-3-photo-layout" alt=''/>
            <div className="headwrap">
                <h2>{props.headline}</h2>
                <button id="read-button" onClick={handleClick}>Read More</button>
                <img src={props.photo2} className="photo2-3-photo-layout"  alt=''/>
            </div>
            <p>{props.text}</p>      
            <img src={props.photo3} className="photo3-3-photo-layout"  alt=''/>      
        </article>
    } else if (false) {//(props.photo2 !== null){         //// TEST (!!props.article.photo2)
        articleHTML =    
        <article id="{props.id}" className="two-photo">
            {/* <div className="two-photo-wrap"> */}
                <div className="headwrap">
                    <img src={props.photo1} className="photo1-2-photo-layout"  alt=''/>
                    <h2>{props.headline}</h2>
                    <button id="read-button" onClick={handleClick}>Read More</button>                
                </div>
                <div className="wrapping">
                    <p>{props.text}</p> 
                    <div className="floated-right">
                        <img src={props.photo2} className="photo2-2-photo-layout" alt='' />
                    </div>
                    
                {/* </div> */}
            </div>
                       
        </article>
    } else if (props.photo1 !== null){         //// //// TEST (!!props.article.photo1)
        
        articleHTML =    
        <article id="{props.id}" className="one-photo article-wrap">
            <div className="headwrap">
                <h2 className="stuff">{props.headline}</h2>
                <button className=" read-button read-button-photo" onClick={handleClick}>Read More</button>                
            </div>
            <div className="photo-wrap">
                <img src={props.photo1} className="photo1-1-photo-layout"  alt=''/>                                 
                <p>{props.text}</p>
            </div>
        </article>
    } else {
        // console.log(props);
        //<img src={props.photo1} className="photo1-1-photo-layout" />
        // let article_id = props.id;

        articleHTML =
        <article id="{props.id}" className="article-wrap">
            <div className="headwrap">
                <h2>{props.headline}</h2>
                <button className="read-button" onClick={handleClick}>Read More</button>
            </div>
            {/* <div className="bodywrap"> */}
            <p>{props.text}</p>     
            {/* <button className="read-button" onClick={handleClick}>Read More</button>        */}
            {/* </div> */}
        </article>
    }

    function handleClick(event){
       
        const artID = event.target.parentElement.parentElement; //.id;
        // const art = document.getElementById(`${artID}`);
        // setOpen(!open);
        // console.log(open);
        if (event.currentTarget.innerHTML==="Read More"){ 
        //(open===true){
            // console.log(open);
            // setOpen(!open);
            let articles=[...document.getElementsByClassName("article-wrap")];
            articles.forEach(article => {article.style.maxHeight='25vh'});    
            artID.style.maxHeight='500vh';
            let morebuttons=[...document.getElementsByClassName("read-button")];
            morebuttons.forEach(rbutton => {rbutton.innerHTML='Read More'});
            // morebuttons.forEach(rbutton => {rbutton.style.backgroundColor='red'});
            // artID.style.lineClamp='none';
            event.target.innerHTML="Read Less"
            // console.log(open);
            // setOpen(!open);
            // console.log(open);
            //if (event.currentTarget.innerHTML==="Read More"){
        } else {
            // console.log(open);
            // setOpen(!open);
            artID.style.maxHeight='25vh';
            // artID.style.lineClamp='5';
            event.target.innerHTML="Read More"
            // console.log(open);
            // setOpen(true);
            // console.log(open);
        }
        // setOpen(!open);
        // forceUpdate();
    }

    // useEffect(() => {
    //     console.log('Forcing re-render')
    // },[open]);

//  <img src={props.photo1} className="photo1-1-photo-layout" />

    return (
    <>
        {articleHTML}
    </>
    )
}
export default Article



/*
If photo3, return (3 photo layout)
elif photo2, return (2 photo layout)
elif photo1, return (1 photo layout)
else return (0 photo layout)

Wide photoooooo
Wide pho1oooooo
Wide photoooooo
head tall ph2to 2 photoa
head tall ph2to
text tezt text

Head head head head
text txt  pho1 1hot
text text pho1 1hot 1 photo
tezt tezt tezt tezt

Wide photo Wide photo
Wide phot1 Wide photo
Wide photo Wide photo
Photo   Headlinehead  3 photos
Ph2to   text    ph3to
Photo   tzt     photo
Photo   tezt    tezt

1: horiz
2: vert
3: horiz

3
<article> displayflex column?
    <img1>
    wrapper div flex row
        <img2>
        <text>
        <img3> float right


<article> displayflex column?
    <img1>
    wrapper div flex row
        <img2> float right
        <text>

<article> displayflex row
    <text>
    <img2> float right




function Collapse() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
      >
        Read More
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}

render(<Example />);







    */

