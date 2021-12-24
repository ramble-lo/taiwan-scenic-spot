import React,{useState,useEffect} from 'react'
import '../public/css/countdown.css'

const Countdown = () => {
    const [seconds, setSeconds] = useState(59)
    const [minutes, setMinutes] = useState(59)
    const [hours, setHours] = useState(23)
    useEffect(() => {
        const id = setInterval(() => setSeconds((c) => c - 1), 1000);
        let hour = 0;
        let min = 0;
        let second = 0;
        if(seconds < 0){
            min = -1
            second = 60
        }
        if(minutes < 0){
            hour = -1
            min = 60
        }
        setSeconds(value => value + second)
        setMinutes(value => value + min)
        setHours(value => value + hour)
        return () => {
            clearInterval(id)
        }
    }, [seconds])
    return (
        <div className='countdown-container'>
            倒數{hours}:{minutes}:{seconds}
        </div>
    )
}

export default Countdown
