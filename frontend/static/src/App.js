import './App.css';
import Masthead from './components/Masthead';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Page from './components/Page';



function App() {
  return (
    <div className="App">
      <Masthead />
      <Navbar />
      <div className="wrapper">
        <Page />
        <Sidebar />        
      </div>
    </div>
  );
}

export default App;

/*
I need to add other layout styles.  Maybe have a random way of determining? Or 
something?

Main story
Regular articles
Side Articles
*/