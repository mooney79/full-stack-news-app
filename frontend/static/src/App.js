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
      <Page />
      <Sidebar />        
    </div>
  );
}

export default App;
