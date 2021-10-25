import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
// import { withRouter} from 'react-router-dom';


function ArticleEdit(props){
    const [story, setStory] = useState({submit: 0});
    const history = useHistory();

    async function fetchArticleDetail(){
        if (props.articleID === 0){
            history.push('/mystories/'); 
        }
        const response = await fetch(`/api_v1/articles/${props.articleID}/`);
        if (response.ok){
            const data = await response.json();
            setStory({...story, ...data});
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

    // useEffect(() => {
    //     if(story.submit) {
    //         async function postData() {
    //             const options = {
    //                 method: 'PUT',
    //                 headers:{
    //                     'Content-Type': 'application/json',
    //                     'X-CSRFToken': Cookies.get('csrftoken'),
    //                 },
    //                 body: JSON.stringify(story)
    //             };
    //             const response = await fetch(`/api_v1/articles/${props.articleID}/`, options);
    //             const data = await response.json();
    //             console.log('data', data);
    //             history.push('/mystories/');
    //         };

    //         postData();
           
    //     }
    // }, [story.submit]);

    async function handleSubmit(event){
        event.preventDefault();
        const phase = event.target.value;
        const newstory = {...story}
        newstory.phase = phase;

        const options = {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newstory)
        };

        const response = await fetch(`/api_v1/articles/${props.articleID}/`, options);
        const data = await response.json();
        console.log('data', data);
        // setStory(data);
        history.push('/mystories/');
    }

    return(
        <form className="mt-3 col-6" onSubmit={handleSubmit} >
            <div className="form-group text-left mb-3">
            <label htmlFor='headline'>Headline: </label>
            <input type="text" 
                className="form-control"
                id="headline"
                autoComplete="off"
                onChange={handleInput}
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

        <button value="dft" type="button" onClick={handleSubmit} className="btn btn-primary mt-3" >Save and Quit</button>
        <button value="sub" type="button" onClick={handleSubmit} className="btn btn-primary mt-3" >Submit</button>
    </form>
    )
}

export default ArticleEdit