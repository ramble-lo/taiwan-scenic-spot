import React,{useState,useEffect} from 'react'
import '../public/css/carousel.css'

const Carousel = () => {
    const [page, setPage] = useState(0)
    const carouselNum = ['01','02','03','04','05','06','07','08','09','10']
    const carouselImg = carouselNum.map((v,i) => {
        return (<img 
                    className={i === page ? 'carousel-content-img' : 'carousel-content-img none'}
                    src={`https://fakeimg.pl/1300x300/?text=Carousel${v}`} 
                    key={`carouselImg${i}`}
                    alt={'carouselImg'}
                ></img>)
    })
    const carouselDot = carouselNum.map((v,i) => {
        return (<div 
                    className='carousel-dot'
                    style={i === page ? {backgroundColor:'black'} : null}
                    key={`carouselDot${i}`}
                    onClick={()=>{setPage(i)}}
                ></div>)
    })
    useEffect(() => {
        const id = setInterval(() => setPage((v) => v + 1), 1000);
        let temp = page
        if(page < 0){
            temp = 9
        }else if(page > 9){
            temp = 0
        }
        setPage(temp)
        return () => {
            clearInterval(id)
        }
    }, [page])
    return (
        <div className='carousel-container'>
            <div className='carousel-content'>
                {carouselImg}
            </div>
            <div className='carousel-dot-group'>
                {carouselDot}
            </div>
            <div className='carousel-arrow-left' onClick={()=>{setPage(page => page - 1)}}></div>
            <div className='carousel-arrow-right' onClick={()=>{setPage(page => page + 1)}}></div>
        </div>
    )
}

export default Carousel
