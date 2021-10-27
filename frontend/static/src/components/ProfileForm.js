import { useState } from 'react'
// import Cookies from 'js-cookie'

function ProfileForm() {
  const [profile, setProfile] = useState({
    alias: '',
    avatar: null,
  });
  const [preview, setPreview] = useState('');

  const handleChange = (event) => {
      const {name, value} = event.target;
      setProfile({...profile, [name]: value});
  }

  const handleImage = (event) => {
    const file = event.target.files[0];
    setProfile({
      ...profile,
      avatar: file,
    })
    const reader = new FileReader(); //Async
    reader.onloadend = () => {
      setPreview(reader.result);
    }
    reader.readAsDataURL(file); //returns URL
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(); //Constructing key value pairs below VVV
    formData.append('alias', profile.alias);
    formData.append('avatar', profile.avatar);

    // const options = { 
    //   method: 'POST',
    //   headers: {
    //     'X-CSRFToken': Cookies.get('csrftoken'), 
    //   },
    //   body: formData,
    // }
    // fetch(url, options);  <-- would work once the url is set up

  }

  return (
    <div className="ProfileForm">
      <form onSubmit={handleSubmit}>
        <input type="text" name="alias" value={profile.alias} onChange={handleChange}/>
        <input type="file" name="avatar" onChange={handleImage}/>
        {profile.avatar && <img src={preview} alt ="" />}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default ProfileForm;
