import React, { useState,useRef,useCallback } from 'react'
import '../public/css/searchBar.css'

const SearchBar = ({setSearchKeyWord}) => {
    const [timer, setTimer] = useState(null)
    const [scroll, setScroll] = useState(false)
    const observer = useRef();

    const lastSpotElementRef = useCallback(node => {
        if(observer.current) observer.current.disconnect();
        if(node) observer.current.observe(node)
    }
    ,[]);
    const handleChange = (value) => {
        if(timer){
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(
            setTimeout(() => {
                console.log(value);
                setSearchKeyWord(value)
            }, 500)
        );
    }
    const scrollFunction = () => {
        let temp = false
        if (window.pageYOffset >= 20) {
            console.log('Y');
            temp = true
        }
        setScroll(temp)
    }
    window.onscroll = () => {scrollFunction()};
    return (
        <div className={ scroll ? 'searchbar-container ': 'searchbar-container'}>
            <input type="text" onChange={(e) => { handleChange(e.target.value)}} className={ scroll ? 'searchbar-container-sticky': null}/>
        </div>
    )
    //className={ scroll ? 'searchbar-container-sticky searchbar-container  ': 'searchbar-container'}
}

export default SearchBar
