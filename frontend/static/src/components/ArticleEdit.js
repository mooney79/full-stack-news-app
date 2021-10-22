import { useEffect, useState } from 'react';
// import { withRouter} from 'react-router-dom';



function ArticleEdit(props){
    const [story, setStory] = useState({

    });

    async function fetchArticleDetail(){
        const response = await fetch(`/api_v1/articles/${props.articleID}/`);
        if (response.ok){
            const data = await response.json();
            setStory(data);
        }
    };

    function handleInput(event) {
        const {name, value} = event.target;
        setStory(prevState => ({  
            ...prevState,        
            [name]:value,
        }))
    }

    useEffect(() => {
        fetchArticleDetail();
    }, [])

    function handleSubmit(){
        console.log("I'll do something eventually!")
    }

    return(
        <form className="mt-3 col-6" onSubmit={handleSubmit} >
            <div className="form-group text-left mb-3">
            <label htmlFor='headline'>Headline: </label>
            <input type="text" 
                className="form-control"
                id="headline"
                onChange={handleInput}
                required
                name='headline'
                value={story.headline}
            />
        </div>
        <div className="form-group text-left mb-3">
            <label htmlFor='text'>Body:</label>
            <textarea type="textarea" 
                rows="8"
                cols="80"
                className="form-control"
                id="text"
                onChange={handleInput}
                required
                name='text'
                value={story.text}
            />
        </div>
        <div className="form-group text-left mb-3">
            <label htmlFor='category1'>Category:</label>
            <select id="category1" name="category1" className="form-control" onChange={handleInput} value={story.category1} required>
                <option value="non">None</option>
                <option value="nrg">Energy and Tech</option>
                <option value="cur">Current Events</option>
                <option value="con">Conspiracies</option>
            </select>
        </div>
        <div className="form-group text-left mb-3">
            <label htmlFor='category2'>Category:</label>
            <select id="category2" name="category2" className="form-control" onChange={handleInput} value={story.category2}>
                <option value="non">None</option>
                <option value="nrg">Energy and Tech</option>
                <option value="cur">Current Events</option>
                <option value="con">Conspiracies</option>
            </select>
        </div>
        <div className="form-group text-left mb-3">
            <label htmlFor='category3'>Category:</label>
            <select id="category3" name="category3" className="form-control" onChange={handleInput} value={story.category3}>
                <option value="non">None</option>
                <option value="nrg">Energy and Tech</option>
                <option value="cur">Current Events</option>
                <option value="con">Conspiracies</option>
            </select>
        </div>       

        <button type="submit" className="btn btn-primary mt-3" >Save</button>
    </form>
    )
}

export default ArticleEdit
// export default withRouter(ArticleEdit)
/*

        <div>
            <p>Category1: {story.category1}</p>
            <p>Category2: {story.category2}</p>
            <p>Category3: {story.category3}</p>
            <p>Status: {story.phase}</p>
        </div>        



*/
// Headline
// Text
// category1-3
// photo1-3
//phase (for later)

//path /api_va/articles/pk/
//
// So what am I thinking?  A button next to each of your drafts that allows 
// for editing.  When you do so, it opens the thing and auto-fills the form with
// current values.

// From the list page, a button to take you to a new page to fill out a new story
// On the new story page, a button to "save as draft" or "submit"
//
//
//  STEPS:
// 1: Fetch the detail view.  Import that data as values into a form.
// 2: Allow user to edit that data/make changes.
// 3: Two buttons -- One "Saves" it as a draft, the other saves it, but also
//      changes the phase to "submitted"
//      Implementing this... one onSubmit function that has an if statement 
//      checking target?  If button A, run function saveAsDraft, if button B,
//      run function saveAsSubmit  When submitted, should kick user back out to
//      My Stories page.
//4: ... anything else?
