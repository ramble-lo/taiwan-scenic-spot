export const getScenicSpot = async (city,top,skip) => {
    try {
        const data = fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/NewTaipei?%24top=30&%24format=JSON')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        });
    }
    catch(err) {
        console.log(console.log('fetch failed', err));
    }
    
}