
import React from 'react';
import { Homepage } from './Components/Homepage';
import { Pagination } from './Components/Pagination';
import { Search } from './Components/Search';
import "./App.css";
//import { useGlobalContext } from './Context';
// import { AppContext } from './Context';
// import { useContext } from 'react';


const App = () => {
  
  return (
    <> 
      <Search />
      <Pagination />
      <Homepage />
    </>
  )
}
export default App;