import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
// import { withRouter} from 'react-router-dom';


function ArticleEdit(props){
    const [story, setStory] = useState({submit: 0});
    const history = useHistory();
    const [preview, setPreview] = useState('');
    let filehold;

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

    useEffect(async () => {
        const formData = new FormData(); //Constructing key value pairs below VVV
        // formData.append('headline', story.headline);
        formData.append('photo1', filehold);
        // formData.append('text', story.text);
        // formData.append('author', story.author);
        // formData.append('category1', story.category1);
        // formData.append('category2', story.category2);
        // formData.append('category3', story.category3);

    const options = {
      method: 'PUT',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'), 
      },
      body: formData,
    }
    const response = await fetch(`/media/`, options); 
    console.log(response);
  }, [preview])




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
    
    const handleImage = (event) => {
        const file = event.target.files[0];
        // setStory({
        //   ...story,
        //   photo1: file,
        // })
        const reader = new FileReader(); //Async
        reader.onloadend = () => {
          setPreview(reader.result);
          console.log(reader.result);
          filehold=reader.result;
        //   setStory({
        //     ...story,
        //     'photo1': file,
        //  })
         console.log(story);
        }
        
        reader.readAsDataURL(file); //returns URL
       
        filehold = file;
        console.log(filehold);
        console.log(file);
        console.log(reader);
        console.log(reader.result);
        
    }


    async function handleSubmit(event){
        event.preventDefault();
        // const phase = story.phase;
        const newstory = {...story}; //, 'photo1': filehold};
        console.log(newstory);
        // newstory.phase = phase;

/*

const handleImageChange = (event) => {
    event.preventDefault();
    const formData = new FormData(); //Constructing key value pairs below VVV
    formData.append('alias', profile.alias);
    formData.append('avatar', profile.avatar);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'), 
      },
      body: formData,
    }
    // fetch(url, options);  <-- would work once the url is set up

  }

*/


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
        history.push('/alldfts');
    }

    /*
    
    const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(); //Constructing key value pairs below VVV
    formData.append('alias', profile.alias);
    formData.append('avatar', profile.avatar);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'), 
      },
      body: formData,
    }
    // fetch(url, options);  <-- would work once the url is set up

  }
    
    */





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


        <label htmlFor='photo1'>Photograph:&nbsp;&nbsp;</label>
        <input type="file" name="photo1" onChange={handleImage}/>
        {story.photo1 && <img src={preview} alt ="" />}
        

        {/* <button value="dft" type="button" onClick={handleSubmit} className="btn btn-primary mt-3" >Save and Quit</button>
        <button value="sub" type="button" onClick={handleSubmit} className="btn btn-primary mt-3" >Submit</button> */}

        

        <div className="form-group text-left mb-3 row flex-div">
            <label htmlFor='phase'>Phase:</label>
            <select id="phase" name="phase" className="form-control phase-submit col-8" onChange={handleInput} value={story.phase}>
                <option value="dft">Draft</option>
                <option value="sub">Submitted</option>
                <option value="pub">Published</option>
                <option value="rej">Rejected</option>
            </select>
            <button className="phase-button col-2"onClick="handleSubmit">Save</button>
        </div>       


    </form>
    )
}

export default ArticleEdit