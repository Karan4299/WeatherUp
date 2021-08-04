import React,{useState,useEffect} from 'react';
import MainContext from './providerContext';
import axios from 'axios';



const Provider = ({children}) =>{
    const [state,setState] = useState(""); 
    const [temp,setTemp] = useState("C");
    const [theme,setTheme] = useState("Light");
    // const [hour,setHour] = useState();

    const weekdatas = {
        allmaxwind:0,
        allminwind : 0,
        allmaxtemp:0,
        allmintemp:0,
        allmaxhumi:0,
        allminhumi:0,
        allmaxcloud:0,
        allmincloud :0,
        allmaxpress:0,
        allminpress:0,
        allmaxuvi:0,
        allminuvi:0,

    }
    let datas;
    let hours;
    let daily;
    let dailytemp;
    let dailyhigh;
    let dailylow;


    useEffect(()=>{
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=12.97623&lon=77.603287&exclude=minutely&appid=bf0104f39cfe79918b4c9b253353ed1e")
        .then(data=>{
            // console.log(data.data.hourly)
            // hours = data.data.hourly.filter((item)=>(new Date((item.dt-19800)*1000)>=new Date()));
            return setState(data.data)
        });
    },[]);

    const changeTheme = (theme) =>{
        setTheme(theme);
    }


    const icons = {
        "Clouds":{
            icon:theme==="Dark"?<i class="fad fa-cloud-moon" Style="--fa-primary-color: grey; --fa-secondary-color: rgb(233,232,228); --fa-secondary-opacity: 1.0"></i>:<i className="fad fa-cloud"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)'
        },
        "Clear":{
            icon:<i className="fad fa-sun"></i>,
            color:'rgba(255,206,100)',
        },
        "Drizzle":{
            icon:theme==="Dark"?<i class="fad fa-cloud-moon-rain"></i>:<i className="fad fa-cloud-drizzle fa-swap-opacity " Style="--fa-primary-color: rgb(233,232,238); --fa-secondary-color: rgb(62,76,199); --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)'
        },
        "Rain":{
            icon:theme==="Dark"?<i class="fas fa-cloud-moon-rain"></i>:<i className="fad fa-cloud-showers-heavy fa-swap-opacity" Style="--fa-primary-color: rgb(233,232,238); --fa-secondary-color: rgb(62,76,199); --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgb(62,76,199)'
        },
        "Thunderstorm":{
            icon:theme==="Dark"?<i class="fad fa-thunderstorm-moon"></i>:<i className="fad fa-thunderstorm fa-swap-opacity" Style="--fa-primary-color: rgb(233,232,238); --fa-secondary-color: orange; --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'yellow',
        },
        "Snow":{
            icon:<i className="fad fa-snowflakes"></i>,
            color:theme==="Dark"?'rgba(233,232,228)':'silver'
        },
        "Mist":{
            icon:<i className="fad fa-fog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)'
        },
        "Smoke":{
            icon:<i class="fad fa-smog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)',
        },
        "Haze":{
            icon:<i class="fad fa-smog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)',
        },
        "Fog":{
            icon:<i class="fad fa-smog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)',
        },
        "Sand":{
            icon:<i class="fad fa-smog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)',
        },
        "Ash":{
            icon:<i class="fad fa-smog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)',
        },
        "Squall":{
            icon:<i class="fad fa-smog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)',
        },
        "Tornado":{
            icon:<i class="fad fa-smog" Style="--fa-primary-color: rgb(233,232,238);--fa-secondary-color: rgb(62,76,199);  --fa-secondary-opacity: 1.0"></i>,
            color:theme==="Dark"?'rgb(233,232,228)':'rgba(62,76,199)',
        },
        "":{
            icon:<i class="fas fa-ghost"></i>,
            color:'white'
        }
    }


    const getTemp = (temprature) => {
        if(temp==="C"){
            return temprature-273.15;
        }else{
            return  ((temprature - 273.15) * (9/5) + 32);
        }
    }


    const changeTemp = (cur) => () => {
        // console.log(cur);
        if(cur!==temp){
            setTemp(cur);
        }
    }


    if(state){
        hours = state.hourly.filter((item,i)=>{
            // 
            if(new Date((item.dt-19800)*1000)>=new Date() 
            && new Date((item.dt-19800)*1000)<=new Date().setHours(new Date().getHours()+7)){
                return item
                // i++;
            }
            return false;

        });

        datas = hours.map(item=>{
            return (""+new Date((item.dt-19800)*1000).getHours()+":00");
        })

        dailytemp = hours.map(item=>{
            return(getTemp(item.temp));
        })

        daily = state.daily.filter((item,i)=>{
            if(i!==0){
                return true;
            }
            return false
        }) 

        

        dailyhigh = daily.map((item,i)=>{
            weekdatas.allmaxwind = Math.max(parseInt(weekdatas.allmaxwind),parseInt(item.wind_speed))
            weekdatas.allmaxtemp = Math.max(parseInt(weekdatas.allmaxtemp),parseInt(item.temp.max))
            weekdatas.allmintemp = weekdatas.allmintemp===0?weekdatas.allmintemp=item.temp.min:Math.min(parseInt(weekdatas.allmintemp),parseInt(item.temp.min))
            weekdatas.allmaxhumi = Math.max(parseInt(weekdatas.allmaxhumi),parseInt(item.humidity))
            weekdatas.allmaxpress = Math.max(parseInt(weekdatas.allmaxpress),parseInt(item.pressure))
            weekdatas.allmaxcloud = Math.max(parseInt(weekdatas.allmaxcloud),parseInt(item.clouds))
            weekdatas.allmaxuvi = Math.max(parseInt(weekdatas.allmaxuvi),parseInt(item.uvi))

            weekdatas.allminwind = weekdatas.allminwind===0?weekdatas.allminwind=item.wind_speed:Math.min(parseInt(weekdatas.allminwind),parseInt(item.wind_speed))
            // allmintemp = allmintemp===0?allmintemp=item.wind_speed:Math.min(parseInt(allmintemp),parseInt(item.temp.max))
            weekdatas.allminhumi = weekdatas.allminhumi===0?weekdatas.allminhumi=item.humidity:Math.min(parseInt(weekdatas.allminhumi),parseInt(item.humidity))
            weekdatas.allminpress = weekdatas.allminpress===0?weekdatas.allminpress=item.pressure:Math.min(parseInt(weekdatas.allminpress),parseInt(item.pressure))
            weekdatas.allmincloud = weekdatas.allmincloud===0?weekdatas.allmincloud=item.clouds:Math.min(parseInt(weekdatas.allmincloud),parseInt(item.clouds))
            weekdatas.allminuvi = weekdatas.allminuvi===0?weekdatas.allminuvi=item.uvi:Math.min(parseInt(weekdatas.allminuvi),parseInt(item.uvi))
        //    console.log(Math.max(parseInt(allwind),parseInt(item.wind_speed))) 
            return getTemp(item.temp.max);
        })


        dailylow = daily.map((item,i)=>{
            return getTemp(item.temp.min);
        })
    }



    const geticon = (weather) =>{
        return icons[weather];
    }

    const getDay=(day)=>{
        const days = ["Sunday","Monday","Tuesday","Wednesday",'Thursday',"Friday","Saturday"];
        return days[day];
    }





    return(
        <MainContext.Provider 
        value={{theme,changeTheme,dailyhigh,dailylow,daily,state,icons,geticon,temp,hours,datas,getTemp,getDay,changeTemp,dailytemp,
            weekdatas}}>
            {children}
        </MainContext.Provider>
    )
}

export default Provider;
