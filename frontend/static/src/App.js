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
import AdminRoute from './components/AdminRoute';
// import ProfileForm from './components/ProfileForm'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/Login/LoginForm'
import Cookies from 'js-cookie';
import MyStories from './components/MyStories';
import ArticleEdit from './components/ArticleEdit';
import AdminEdit from './components/AdminEdit';
import ArticleNew from './components/ArticleNew';
import PageCon from './components/PageCon';
import PageCur from './components/PageCur';
import PageNrg from './components/PageNrg';
// import TestingPhotos from './components/Test'
import MySubs from './components/MySubs';
import MyPubs from './components/MyPubs';
import MyDfts from './components/MyDfts';
import MyRejs from './components/MyRejs';
import AllSubs from './components/AllSubs';
import AllPubs from './components/AllPubs';
import AllDfts from './components/AllDfts';
import AllRejs from './components/AllRejs';
// import Test from './components/Test';


function App() {
  const [articles, setArticles] = useState([{headline: '', text: ''}]);
  const [isAuth, setIsAuth] = useState(null);
  const [isStaff, setIsStaff] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
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
      setIsAdmin(false);
      console.log(isStaff);
      console.log(response);
    } else {
      const staff = await response.json();
      if (staff.is_staff === true){
        setIsStaff(true);
      }
      if (staff.is_superuser === true){
        setIsAdmin(true);
      }
    }
  };

  useEffect(async () => {
    // async function fetchData() {
    await fetchUser();
    await fetchArticles();
    await checkStaff();
    // }
  }, [isAuth]);


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
  }, [history, isStaff, user])

  if (isAuth === null){
    return <Spinner animation="grow" variant='primary' />
  }

  return (
    <div className="App">
      <Masthead />
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} user={user} isStaff={isStaff} setUser={setUser} setIsStaff={setIsStaff} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
      {/* <Test /> */}
      <Switch>
      <PrivateRoute path='/mystories' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <MyStories articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </PrivateRoute>
      <PrivateRoute path='/mydfts' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <MyDfts articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </PrivateRoute>
      <PrivateRoute path='/mypubs' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <MyPubs articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </PrivateRoute>
      <PrivateRoute path='/mysubs' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <MySubs articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </PrivateRoute>
      <PrivateRoute path='/myrejs' isStaff={isStaff}>
          <div className="wrapper">
            <MyRejs articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </PrivateRoute>

      <AdminRoute path='/alldfts' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <AllDfts articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </AdminRoute>
      <AdminRoute path='/allpubs' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <AllPubs articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </AdminRoute>
      <AdminRoute path='/allsubs' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <AllSubs articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </AdminRoute>
      <AdminRoute path='/allrejs' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <AllRejs articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin} setArticleID={setArticleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </AdminRoute>
      <AdminRoute path='/adminedit' isStaff={isStaff} isAdmin={isAdmin}>
          <div className="wrapper">
            <AdminEdit user={user} articleID={articleID}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
      </AdminRoute>










        <Route path='/constories'>
          <div className="wrapper">
            <PageCon articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>
        <Route path='/curstories'>
          <div className="wrapper">
            <PageCur articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>
        <Route path='/nrgstories'>
          <div className="wrapper">
            <PageNrg articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route>
{/* 
        <Route path='/test'>
          <div className="wrapper">
            <TestingPhotos articles={articles} setArticles={setArticles} isStaff={isStaff}/>
            <Sidebar articles={articles} setArticles={setArticles}/>        
          </div>
        </Route> */}



        <Route path='/login'>
          <LoginForm isAuth={isAuth} setIsAuth={setIsAuth} user={user} setUser={setUser}/>
        </Route>
        <PrivateRoute path='/edit' isStaff={isStaff} isAdmin={isAdmin}>
          <ArticleEdit user={user} articleID={articleID}/>
        </PrivateRoute>
        <Route path='/new' isStaff={isStaff} isAdmin={isAdmin}>
          <ArticleNew user={user}/>
        </Route>
        <Route path='/register'>
          <RegistrationForm isAuth={isAuth} setIsAuth={setIsAuth} user={user} setUser={setUser}/>
        </Route>
        {/* <Route path='/profile'>
          <ProfileForm isAuth={isAuth} setIsAuth={setIsAuth} user={user} setUser={setUser}/>
        </Route> */}
        <Route path=''>
          <div className="wrapper">
            <Page articles={articles} setArticles={setArticles} isStaff={isStaff} isAdmin={isAdmin}/>
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