import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Navbar.css'

function Navbar(props){
    let logHTML;
    let staffPageLink;
    
    const handleLogout = async () => {
      const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(props.user)
      };

      const response = await fetch('/rest-auth/logout/', options)
      if(!response){
          console.log(response);
      } else {
        const data = await response.json();
        Cookies.remove('Authorization');
        props.setIsAuth(false);
        props.setIsStaff(false);
        props.setUser(4);
        // props.setIsStaff(false);
      }
    };

    /*
    async function fetchConArticles(){
      const response = await fetch('/api_v1/articles/con/');
      if (response.ok){
          const data = await response.json();
          test=data;
          setArticles(test);
      }
    };
    */


    if (props.isAuth === true){
      logHTML = <NavLink to='/logout' onClick={handleLogout}> Logout </NavLink>
    } else {
      logHTML = <NavLink to='/login'> Login </NavLink>  
    }

    if (props.isStaff === true) {
      staffPageLink = <><li className="nav-item mr-3"> <NavLink to='/mystories'> My Stories </NavLink></li>
          <li className="nav-item mr-3">
            <NavLink to='/mydfts'> Drafts </NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to='/mysubs'> Submitted </NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to='/mypubs'> Published </NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to='/myrejs'> Rejected </NavLink>
          </li></>
    } else {
      staffPageLink=<></>
    }


    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid text-center">
    {/* <a className="navbar-brand" href="#">Site Navigation</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto justify-content-center">
        <div className="to-left">
          <li className="nav-item mr-3">
            <NavLink to=''> Home </NavLink>
          </li>
          {/* <li className="nav-item mr-3">
            <NavLink to='/profile'> Profile </NavLink>
          </li>          */}
          <li className="nav-item mr-3">
            <NavLink to='/constories'> Conspiracies </NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to='/curstories'> Current Events </NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to='/nrgstories'> Energy and Tech </NavLink>
          </li>          
        </div>
        <div className="to-right">        
          {staffPageLink}
          <li className="nav-item mr-3">
            {logHTML}  
          </li>
        </div>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    )
}
export default Navbar


////////////////////////////////
//  ADD BUTTONS FOR MY CATEGORIES
///////////////////////////////
/*

 {error &&<span className="text-danger"> {error}</span>}


function Header(props) {
    return(
        <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
            <div classNameName="container">
                <a classNameName="navbar-brand" href="/">Blog App</a>
                <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNameName="navbar-toggler-icon"></span>
                </button>
                <div classNameName="collapse navbar-collapse" id="navbarResponsive">
                    <ul classNameName="navbar-nav ml-auto">
                        <li classNameName="nav-item">
                            <NavLink to='/'> Home </NavLink>
                        </li>
                        <li classNameName="nav-item">
                            <NavLink to='/profile'> Profile </NavLink>
                        </li>
                        <li classNameName="nav-item">
                            <NavLink to='/login'> Login </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
*/


/* ul with li children, created by making a set of categories from articles 
passed in? 

<div classNameName="Navbar">
        I'm the Navbar
</div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search">
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>









*/