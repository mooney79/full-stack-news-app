import './App.css';
import Masthead from './components/Masthead';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import Profile from './components/Profile';
import { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import PrivateRoute from './components/PrivateRoute';
import ProfileForm from './components/ProfileForm'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/Login/LoginForm'



function App() {
  const [articles, setArticles] = useState({

  });
  const [isAuth, setIsAuth] = useState(null);

  const history = useHistory();


  useEffect(()=> {
    const checkAuth = async () => {
      const response = await fetch('/rest-auth/user/');
      if (!response.ok) {
        setIsAuth(false);
        history.push('/login');
      } else {
        setIsAuth(true);
        history.push('/profile');
      }
    }
    checkAuth();
  }, [history])

  if (isAuth === null){
    return <Spinner animation="grow" variant='primary' />
  }

  return (
    <div className="App">
      <Masthead />
      <Navbar />
      <Switch>
        <Route path='/login'>
          <LoginForm isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>
        <Route path='/register'>
          <RegistrationForm isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>
        <Route path='/profile'>
          <ProfileForm isAuth={isAuth} setIsAuth={setIsAuth}/>
        </Route>
        <Route path=''>
          <div className="wrapper">
            <Page articles={articles} setArticles={setArticles}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>
      </Switch>

  
  
    </div>
  );
}

      // <Header />
      // <Switch>
      //   <Route path='/login'>
      //     <LoginForm isAuth={isAuth} setIsAuth={setIsAuth}/>
      //   </Route>
      //   <Route path='/register'>
      //     <RegistrationForm />
      //   </Route>
      //   <PrivateRoute path='/profile' isAuth={isAuth}>
      //     <ProfileForm />
      //   </PrivateRoute>
      // </Switch>

export default withRouter(App);;

/*

    <Profile />



import RegistrationForm from '../Registration/RegistrationForm';
import LoginForm from '../Login/LoginForm';
import ProfileForm from '../Profile/ProfileForm';
// import Cookies from 'js-cookie';
import Header from '../Header/Header';

  

  // CONDITIONAL RENDERING
  // let html;                   
  // //Very basic, can get really in-depth with conditional rendering
  // if (state.selection==='login'){
  //   html = <LoginForm setState={setState}/>
  // } else if (state.selection==='registration'){
  //   html = <RegistrationForm setState={setState}/>
  // } else if (state.selection === 'profile'){
  //   html=<ProfileForm />
  // }

  // {/* <div className="row justify-content-center">
  //      {/* {html} */
  //     {/* </div> */}