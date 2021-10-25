import './App.css';
import Masthead from './components/Masthead';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
// import Profile from './components/Profile';
import { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import PrivateRoute from './components/PrivateRoute';
import ProfileForm from './components/ProfileForm'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/Login/LoginForm'
import Cookies from 'js-cookie';
import MyStories from './components/MyStories';
import ArticleEdit from './components/ArticleEdit';
import ArticleNew from './components/ArticleNew';
import PageCon from './components/PageCon';
import PageCur from './components/PageCur';
import PageNrg from './components/PageNrg';



function App() {
  const [articles, setArticles] = useState([{headline: '', text: ''}]);
  const [isAuth, setIsAuth] = useState(null);
  const [isStaff, setIsStaff] = useState(null);
  const [user, setUser] = useState({pk: 4});
  const [articleID, setArticleID] = useState(0);
  let test;
  let pk;


  const history = useHistory();
  
  async function fetchUser(){
    const response = await fetch(`/rest-auth/user/`, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      }
    });    
    if (response.ok){
        const data = await response.json();
        pk = data.pk;
        setUser({pk: pk});
        console.log(data);
        console.log(pk)
    }
  }

  async function fetchArticles(){
    const response = await fetch('/api_v1/articles/pub/');
    if (response.ok){
        const data = await response.json();
        test=data;
        setArticles(test);
    }
  };

  const checkStaff = async () => {
    const response = await fetch(`/api_v1/articles/users/${pk}/`);
    if (!response.ok) {
      setIsStaff(false);
      console.log(isStaff);
      console.log(response);
    } else {
      const staff = await response.json();
      if (staff.is_staff === true){
      setIsStaff(true);
      console.log(isStaff);
      console.log(staff)
      console.log(response);
    }}
  };

  useEffect(async () => {
    await fetchUser();
    await fetchArticles();
    console.log(pk)
    await checkStaff();
    console.log(user);
  }, [, isAuth]);


  useEffect(()=> {
    const checkAuth = async () => {
      const response = await fetch('/rest-auth/user/');
      if (!response.ok) {
        setIsAuth(false);
        // history.push('/login');
      } else {
        setIsAuth(true);
        // history.push('');
      }
    }
    checkAuth();
    fetchArticles();
    console.log(articles);
    // checkStaff();
    console.log(user);
  }, [history, isStaff, user])

  if (isAuth === null){
    return <Spinner animation="grow" variant='primary' />
  }

  return (
    <div className="App">
      <Masthead />
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} user={user} isStaff={isStaff} setUser={setUser}/>
      <Switch>
      <PrivateRoute path='/mystories' isStaff={isStaff}>
          <div className="wrapper">
            <MyStories articles={articles} setArticles={setArticles} isStaff={isStaff} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </PrivateRoute>
        <Route path='/constories'>
          <div className="wrapper">
            <PageCon articles={articles} setArticles={setArticles} isStaff={isStaff}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>
        <Route path='/curstories'>
          <div className="wrapper">
            <PageCur articles={articles} setArticles={setArticles} isStaff={isStaff}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>
        <Route path='/nrgstories'>
          <div className="wrapper">
            <PageNrg articles={articles} setArticles={setArticles} isStaff={isStaff}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>



        <Route path='/login'>
          <LoginForm isAuth={isAuth} setIsAuth={setIsAuth} user={user} setUser={setUser}/>
        </Route>
        <PrivateRoute path='/edit' isStaff={isStaff}>
          <ArticleEdit user={user} articleID={articleID}/>
        </PrivateRoute>
        <Route path='/new' isStaff={isStaff}>
          <ArticleNew user={user}/>
        </Route>
        <Route path='/register'>
          <RegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} user={user} setUser={setUser}/>
        </Route>
        <Route path='/profile'>
          <ProfileForm isAuth={isAuth} setIsAuth={setIsAuth} user={user} setUser={setUser}/>
        </Route>
        <Route path=''>
          <div className="wrapper">
            <Page articles={articles} setArticles={setArticles} isStaff={isStaff}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>        
      </Switch>
    </div>
  );
}


      //   <PrivateRoute path='/profile' isAuth={isAuth}>
      //     <ProfileForm />
      //   </PrivateRoute>
      // </Switch>

export default withRouter(App);;

/*
  <Profile />
  <input type="textfield" value="Edit me, Seymour!"/>



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

  /*
  
  For TONIGHT -- 
  Photos
  Sidebar
  
  */