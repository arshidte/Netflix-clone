import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action,originals,comedy,romance,trending} from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/rowPost/RowPost';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
    </div>
  )
}

export default App
