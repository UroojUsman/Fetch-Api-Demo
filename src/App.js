import React, {useEffect,useState} from 'react';
import './App.css';

function App() {

  const [repos,setRepos]= useState([{}]);

  useEffect(()=>{
    async function getData(){
      const response=await fetch('https://api.github.com/users/UroojUsman/repos')
   const data = await response.json();
    console.log(data);
    setRepos(data);
    }
   getData();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>All Repositories of Urooj Usman</h1>
        <ul>
          {repos.map((reposObj,ind)=>{
            return(<li key={ind}>
              {reposObj.name}
              </li>)
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
