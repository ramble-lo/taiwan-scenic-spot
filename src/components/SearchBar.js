import React, { useState } from 'react'
import '../public/css/searchBar.css'

const SearchBar = ({setSearchKeyWord}) => {
    const [timer, setTimer] = useState(null)
    const [scroll, setScroll] = useState(false)
    const handleChange = (value) => {
        if(timer){
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                setSearchKeyWord(value)
            }, 500)
        );
    }
    window.onscroll = () => {
        let temp = false
        if (window.pageYOffset >= 20) {
            temp = true
        }
        setScroll(temp)
    };
    return (
        <div className='searchbar-container'>
            <input type="text" onChange={(e) => { handleChange(e.target.value)}} className={ scroll ? 'searchbar-container-sticky': null}/>
        </div>
    )
}

export default SearchBar
