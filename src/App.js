import './App.css';
import {useState} from 'react'
import Content from './components/Content';
import Carousel from './components/Carousel';
import SearchBar from './components/SearchBar';
import Countdown from './components/Countdown';

const App = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  return (
    <div className='container'>
      <SearchBar setSearchKeyWord={setSearchKeyWord}/>
      <Carousel />
      <Countdown />
      <Content searchKeyWord={searchKeyWord}/>
      <div className='backtop' onClick={()=>{window.scroll(0, 0)}}></div>
    </div>
  )
}
export default App;
