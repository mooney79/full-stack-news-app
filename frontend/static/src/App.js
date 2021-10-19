import './App.css';
import Masthead from './components/Masthead';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import { useState } from 'react';



function App() {
  const [articles, setArticles] = useState({

  })

  return (
    <div className="App">
      <Masthead />
      <Navbar />
      <div className="wrapper">
        <Page articles={articles} setArticles={setArticles}/>
        <Sidebar articles={articles} setArticles={setArticles}/>        
      </div>
    </div>
  );
}

export default App;

/*
*/