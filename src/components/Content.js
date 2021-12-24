import React,{useState,useEffect,useRef,useCallback} from 'react'
import '../public/css/content.css'
import {getScenicSpot} from '../moudles/request';
const cityList = [
    'Taipei','NewTaipei','Taoyuan','Taichung','Tainan','Kaohsiung','Keelung','Hsinchu','HsinchuCounty','MiaoliCounty','ChanghuaCounty','NantouCounty','YunlinCounty','ChiayiCounty','Chiayi','PingtungCounty','YilanCounty','HualienCounty','TaitungCounty','KinmenCounty','PenghuCounty','LienchiangCounty'
]

const Content = ({searchKeyWord}) => {
    const [cityName, setCityName] = useState('Taipei');
    const [top, setTop] = useState(5);
    const [skip, setSkip] = useState(0);
    const [fetchScenicSpot, setFetchScenicSpot] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [popUpWindow, setPopUpWindow] = useState('')
    const observer = useRef();

    const lastSpotElementRef = useCallback(node => {
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                console.log('Visable'); 
                setPageNumber(prevNumber => prevNumber + 1);
            }
        })
        if(node) observer.current.observe(node);
    }
    ,[]);

    useEffect(() => {
        const getData = async () => {
            // console.log(`top:${top}`);
            // console.log(`skip:${skip}`);
            // console.log(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${cityName}?%24top=${top}&%24skip=${skip}&%24format=JSON`);
            const data = fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${cityName}?%24top=${top}&%24skip=${skip}&%24format=JSON`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setFetchScenicSpot(preSpot => [...preSpot,...data]);
                setSkip(skip => skip + 5);
            })
            .catch((err) => {
                console.log(`Error fetching data:${err}`);
            })
            
        }
        if(fetchScenicSpot.length < 40)getData();
    }, [cityName,pageNumber])

    const popUp = (i) => {
    const result =  <div className='popUp-container' >
            <div className='popUp-close' onClick={()=>setPopUpWindow('')}></div>
            <div className='popUp-display'>
                <div className='popUp-item'>{fetchScenicSpot[i].City}</div>
                <div className='popUp-item'>{fetchScenicSpot[i].Name}</div>
                <div className='popUp-item'>{fetchScenicSpot[i].Phone}</div>
                <div className='popUp-item'>{fetchScenicSpot[i].DescriptionDetail}</div>
                <div className='popUp-item'>{}</div>
            </div>
        </div>
        setPopUpWindow(result)
    }
    const cityTabs = cityList.map((v,i) => {
        return(
            <div 
                className='content-tabs-item' 
                onClick={()=>{
                    setCityName(v)
                    setFetchScenicSpot([])
                    setTop(5)
                    setSkip(0)
                }}
                key={i}
                >{v}</div>
        )
    })
    const scenesList = fetchScenicSpot.filter((value)=>{
        if(searchKeyWord == ''){return value}
        else{return value.Name.match(searchKeyWord)}
    }).map((v,i)=>{
        return(
            <div className='content-scenesList-item' ref={fetchScenicSpot.length === i + 1 ? lastSpotElementRef : null} key={i} onClick={()=>popUp(i)}>
                {v.City}<br/>
                {v.Name}<br/>
                {v.Phone}
            </div>
        )
    })
    return (
        <div className='content-container'>
            {popUpWindow}
            <div className='content-tabs'>
                {cityTabs}
            </div>
            <div className='content-scenesList'>
                {scenesList}
            </div>
        </div>
    )
}

export default Content
