function Article(props){

    let articleHTML;                           // TEST (!!props.article.photo3)
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
        articleHTML =
        <article>
            <h2>I'm a bigger headline that stretches across the page!</h2>
            <p>  I'm an article! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga magni enim quia harum hic quas a quasi, tempora laborum iusto accusamus animi doloremque, culpa, eos nulla voluptas quisquam quo!</p>
        </article>
    }



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
*/