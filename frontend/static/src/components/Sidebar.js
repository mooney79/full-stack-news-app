import SideArticle from './SideArticle';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Sidebar(props){
    const [bitesize, setBitesize] = useState([])

    async function fetchBitesize(){
        const response = await fetch('/api_v1/articles/bitesize/');
        if (response.ok){
            const data = await response.json();
            const test=data;
            console.log(data)
            setBitesize(test);
        }
      };

      useEffect(() => {
          fetchBitesize();
      }, []);

      let bitesizenews;
      if (bitesize !== []){
          bitesizenews = bitesize.map(news => <SideArticle key={news.id+7000} {...news} bitesize={bitesize} />)
      } else {
          bitesizenews = <> <Spinner animation="grow" variant='primary' /><p>Loading...</p></>
      }
      
      



    return (
        <div className="Sidebar">
        <h2 className="side-head">Bite-Sized News!</h2>
        {bitesizenews}
        </div>
    )
}
export default Sidebar