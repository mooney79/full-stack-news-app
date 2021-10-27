import './AdminPost.css';
// import Collapse from 'react-bootstrap/Collapse'
import { useEffect, useState } from 'react';
//useEffect, useCallback
import Badge from 'react-bootstrap/Badge'
import { useHistory } from 'react-router-dom';

function AdminPost(props){
    const history = useHistory();
    // const [open, setOpen] = useState(true);
    // const [, updateState] = useState();
    // const forceUpdate = useCallback(() => updateState({}), []);
    // setOpen(true);

    let articleHTML;                           // TEST (!!props.article.photo3)
    let phaseDesc;
    let phaseClass;
    const [author, setAuthor] = useState('');

    switch(props.phase){
        case 'sub':
            phaseDesc = 'Submitted';
            phaseClass = 'badge-sub';
            break;
        case 'pub':
            phaseDesc = 'Published';
            phaseClass = 'badge-pub';
            break;
        case 'rej':
            phaseDesc = 'Rejected';
            phaseClass = 'badge-rej';
            break;
        case 'dft':
            phaseDesc = 'Draft';
            phaseClass = 'badge-dft';
            break
        default:
            console.log('Error -- Article phase unrecognized.')
    }

    let editButton;
    // if (phaseDesc === 'Draft'){
        editButton = <button id="edit-button" onClick={handleEditClick}>Edit</button>                
    // } else {
    //     editButton = <> </>
    // }

    /*
    switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;


    
    */
    
    const fetchUserName = async () => {
        const response = await fetch(`/api_v1/articles/users/${props.author}/`);
        if (!response.ok) {
            //   author='';
          // history.push('/login');
        } else {
            const holdauthor=await response.json();
            setAuthor(holdauthor.username);
            console.log(author);
      }
    }
    
    fetchUserName();

    useEffect(() => {
        console.log(author)
    }, [author])




    if (false){              //Set proper styling for each case
        articleHTML =                       //Then insert className's into these
        <article>                       
             <div className="photo1-3-photo-layout">Image1</div>
             <div className="photo2-3-photo-layout">Image2</div>
             <div className="photo3-3-photo-layout">Image3</div>
            <h2>I'm a bigger headline that stretches across the page!</h2>
            <p>  I'm an article! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga magni enim quia harum hic quas a quasi, tempora laborum iusto accusamus animi doloremque, culpa, eos nulla voluptas quisquam quo!</p>
          
        </article>
    } else if (false){         //// TEST (!!props.article.photo2)
        articleHTML =    
        <article>
            <div className="photo1-2-photo-layout">Image1</div>
            <h2>I'm a bigger headline that stretches across the page!</h2>
            <div className="photo2-2-photo-layout">Image2</div>
            <p>  I'm an article! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga magni enim quia harum hic quas a quasi, tempora laborum iusto accusamus animi doloremque, culpa, eos nulla voluptas quisquam quo!</p>
        </article>
    } else if (false){         //// //// TEST (!!props.article.photo2)
        
        articleHTML =    
        <article>
             <div className="photo1-1-photo-layout">Image1</div>
            <h2>I'm a bigger headline that stretches across the page!</h2>
            <p>  I'm an article! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga magni enim quia harum hic quas a quasi, tempora laborum iusto accusamus animi doloremque, culpa, eos nulla voluptas quisquam quo!</p>
        </article>
    } else {
        // console.log(props);
        // let article_id = props.id;

        articleHTML =
        <article id={props.id} className="article-wrap">
            <div className="headwrap">
                <div className="badgewrap">
                <h2>{props.headline}</h2><Badge className="badge" className={phaseClass}>{phaseDesc}</Badge>
                </div>
                <div className="buttonDiv">
                    {editButton}
                    <button className="read-button" onClick={handleClick}>Read More</button>                  
                </div>
            </div>
            <p>By: {author}</p>
            <p>{props.text}</p>
        </article>
    }

    function handleClick(event){
        const artID = event.target.parentElement.parentElement.parentElement; //.id;
        if (event.target.innerHTML==="Read More"){ 
            let articles=[...document.getElementsByClassName("article-wrap")];
            articles.forEach(article => {article.style.maxHeight='25vh'});    
            artID.style.maxHeight='500vh';
            let morebuttons=[...document.getElementsByClassName("read-button")];
            morebuttons.forEach(rbutton => {rbutton.innerHTML='Read More'});
            event.target.innerHTML="Read Less"
        } else {
            artID.style.maxHeight='25vh';
            event.target.innerHTML="Read More"
        }
    }

    function handleEditClick(event){
        let articleID = event.target.parentElement.parentElement.parentElement.id; //.id;
        props.setArticleID(articleID);
        console.log(articleID);
        // const art = document.getElementById(`${artID}`);
        history.push('/adminedit/');
    }

    

    // useEffect(() => {
    //     console.log('Forcing re-render')
    // },[open]);



    return (
    <>
        {articleHTML}
    </>
    )
}
export default AdminPost

////////////////////////////////////////
//ADD -- IMPLEMENT EDIT BUTTON.  pass in article as prop so I can props.id
///////////////////////////////////////

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