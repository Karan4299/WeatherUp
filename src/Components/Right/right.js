import React,{useContext,useState,useRef,useEffect} from 'react';
// import { useEffect } from 'react/cjs/react.development';
import MainContext from '../Provider/providerContext';
import { RightBlock,Container,Bar,ChangeBlock,Today,Week,BarLeft,BarRight,LineBlock ,Highlights,Cards} from './rightStyled';
import  {Line} from 'react-chartjs-2';

import './right.css';
import gsap from 'gsap';

const Right = () => {
    let active = new Date();
    const db = useContext(MainContext)
    const [TW,setTW] = useState("Today");
    let today = useRef();
    let week = useRef();
    let tbar = useRef();
    let wbar = useRef();
    let cel =<span>&#8451;</span>;
    let fah = <span>&#8457;</span>;
    const moon=<i className="fas fa-moon"></i>;
    const sun = <i className="fas fa-sun"></i>;
    const weekdatas = db.state?db.weekdatas:"";
    
    const current = db.state?db.state.current:"";
    const daily = db.daily?db.daily[0]:"";

    // console.log(db.state)
    let char={
        labels: db?db.datas:[],
        datasets: [{
            label: 'Temp',
            // showLine:false,
            pointHitRadius:10,
            data: db?db.dailytemp:[],
            pointHoverBorderColor:'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 3,
            
        }],
    }

    useEffect(()=>{
        const tl = gsap.timeline();
        tl.to(".PopUp",{duration:0,scale:0.95});
        tl.to(".PopUp",{duration:.2,delay:.6,opacity:1,scale:1,stagger:.05});
    },[]);

    const getMonth = (cur) => {
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        return month[cur];
    }
    const getDate=(cur) => {
        return (new Date(cur).getDate()+" "+getMonth(new Date(cur).getMonth()));
    }

    

    let data = {
        labels: [getDate(active.setDate(active.getDate()+1)), getDate(active.setDate(active.getDate()+1)), getDate(active.setDate(active.getDate()+1)), getDate(active.setDate(active.getDate()+1)), getDate(active.setDate(active.getDate()+1)), getDate(active.setDate(active.getDate()+1)),getDate(active.setDate(active.getDate()+1))],
        datasets: [
          {
            label: `Max `,
            data: db?db.dailyhigh:[],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: 'Min',
            data: db?db.dailylow:[],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: false,
              position: 'left',
              id: 'y-axis-1',
            },
            {
              type: 'linear',
              display: false,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnArea: false,
              },
            },
          ],
        },
      };

    // console.log(db?db.state:"");

    const changeTW = (cur) =>()=> {
        let tl = gsap.timeline();
        if(cur!==TW){
            if(cur==="Week"){
                
                tl.to(".chAniT",{duration:.2,delay:.3,scale:1.05,opacity:0,stagger:.02});
                
                tl.from(".chAinW",{duration:.2,delay:.5,opacity:0,scale:0.95,stagger:.02});
                tl.to(".chAniT",{duration:0,scale:0.95});
                
                setTimeout(()=>{
                    if(cur!==TW){
                            setTW(cur);
                        }
                },900);

            }else{
                tl.to(".chAinW",{duration:.2,delay:.3,scale:1.05,opacity:0,stagger:.02});
                tl.to(".chAniT",{duration:.2,delay:.5,scale:1,opacity:1,stagger:.02});
                tl.to(".chAinW",{duration:0,scale:1,opacity:1});

                setTimeout(()=>{
                    if(cur!==TW){
                            setTW(cur);
                        }
                },1000);
            }
        }
    }

    return(
        <RightBlock theme={db.theme}> 
            <Container>
                <Bar>
                    <BarLeft theme={db.theme} className="PopUp" current={TW}>
                        <p ref= {el=>tbar=el} onClick={changeTW("Today")}>Today</p>
                        <p ref={el=>wbar=el} onClick={changeTW("Week")}>Week</p>
                    </BarLeft>
                    <BarRight className="PopUp" temp={db.temp}>
                        <p onClick={db.changeTemp("C")}>&#8451;</p>
                        <p onClick={db.changeTemp("F")}>&#8457;</p>
                        <p onClick = {()=>db.theme==="Light"?db.changeTheme("Dark"):db.changeTheme("Light")}>{db.theme==="Light"?moon:sun}</p>
                    </BarRight>
                </Bar>
                <ChangeBlock>
                    <Today  ref={el=>today=el} current={TW}>
                        <LineBlock theme={db.theme} className="PopUp">
                            <p theme={db.theme} className="chAniT">Hourly Forecast</p>
                            <Line className="line_bar_design chAniT"
                            data={char}></Line>
                        </LineBlock>
                        <Highlights theme={db.theme}>
                            <p className="chAniT PopUp">Today's Highlights</p>
                            <Cards theme={db.theme}>
                                <div className="Wind chAniT PopUp">
                                    <p>Wind Speed</p>
                                    <p>{current?current.wind_speed:""} <span>km/h</span></p>
                                    <p><i className="fad fa-compass" Style="color:red"></i> &nbsp; {current?current.wind_deg:""} &#176;</p>
                                </div>
                                <div className="Wind chAniT PopUp ">
                                    <p >Humidity</p>
                                    <p>{current?current.humidity:""}<span>%</span></p>
                                    <p><i className="fas fa-dewpoint" Style="color:lightblue"></i> &nbsp; {current?current.dew_point:""}</p>
                                </div>
                                <div className="Sunsetrise chAniT PopUp">
                                    <p>Sunrise & Sunset</p>
                                    <p><i className="fad fa-sunrise" Style="color:orange"></i> &nbsp; {current?(new Date(new Date((current.sunrise-19800)*1000).setHours(new Date((current.sunrise-19800)*1000).getHours()+5)).getHours()+":"+new Date((current.sunrise-19800)*1000).getMinutes()):""}</p>
                                    <p><i className="fad fa-sunset" Style="color:orange"></i>&nbsp; {current?(new Date(new Date((current.sunrise-19800)*1000).setHours(new Date((current.sunset-19800)*1000).getHours()+5)).getHours()+":"+new Date((current.sunset-19800)*1000).getMinutes()):""}</p>
                                </div>
                                <div className="Humidity chAniT PopUp">
                                    <p>Visibility</p>
                                    <p>{current?(current.visibility)/1000:""} km</p>
                                    <p><i className="fad fa-eye" Style="color:orange"></i>&nbsp; WSW</p> 
                                </div>
                                <div className="Visibility chAniT PopUp">
                                    <p>Pressure</p>
                                    <p>{current?(current.pressure):""} </p>
                                    <p><i className="fad fa-tire-pressure-warning" Style="color:green"></i> &nbsp; hPa</p>
                                </div>
                                <div className=" chAniT Sunsetrise PopUp ">
                                    <p>Moonrise & Moonset</p>
                                    <p><i className="fas fa-moon-stars" Style="color:grey"></i> &nbsp; {daily?(new Date((daily.moonrise-19800)*1000)).getHours()+":"+(new Date((daily.moonrise-19800)*1000)).getMinutes():"no"}</p>
                                    <p><i className="fad fa-moon" Style="color:grey"></i>&nbsp; {daily?(new Date((daily.moonset-19800)*1000)).getHours()+":"+(new Date((daily.moonset-19800)*1000)).getMinutes():"no"}</p>
                                </div>
                            </Cards>
                        </Highlights>
                    </Today>
                    <Week ref ={el=>week=el} current={TW}>
                        <LineBlock theme={db.theme}className="chAinW PopUp">
                            <p >Week Forecast</p>
                            <Line className="line_bar_design "
                            data={data}></Line>
                        </LineBlock>
                        <Highlights theme={db.theme}>
                            <p className="chAinW PopUp">Week's Min-Max</p>
                            <Cards theme={db.theme}>
                                <div className="Wind Sunsetrise chAinW PopUp">
                                    <p>Wind Speed</p>
                                    <p><i className="fad fa-wind" Style="color:blue"></i> &nbsp;{weekdatas!==""?weekdatas.allmaxwind:0} <span>km/h</span></p>
                                    <p><i className="fad fa-wind" Style="color:blue"></i> &nbsp; {weekdatas!==""?weekdatas.allminwind:0} <span>km/h</span></p>
                                </div>
                                <div className="Wind Sunsetrise chAinW PopUp">
                                    <p>Humidity</p>
                                    <p><i className="fas fa-dewpoint" Style="color:lightblue"></i> &nbsp;{weekdatas!==""?weekdatas.allmaxhumi:0} <span>km/h</span></p>
                                    <p><i className="fas fa-dewpoint" Style="color:lightblue"></i> &nbsp; {weekdatas!==""?weekdatas.allminhumi:0} <span>km/h</span></p>
                                </div>
                                <div className="Sunsetrise chAinW PopUp">
                                    <p>Temprature</p>
                                    <p><i className="fad fa-temperature-up" Style="color:red"></i> &nbsp;{weekdatas!==""?db.getTemp(weekdatas.allmaxtemp).toFixed(2):0} {db.temp==="C"?cel:fah}</p>
                                    <p><i className="fad fa-temperature-down" Style="color:red"></i> &nbsp; {weekdatas!==""?db.getTemp(weekdatas.allmintemp).toFixed(2):0} {db.temp==="C"?cel:fah}</p>
                                </div>
                                <div className="Humidity Sunsetrise chAinW PopUp">
                                    <p>Cloud</p>
                                    <p><i className="fas fa-cloud" Style="color:orange"></i> &nbsp;{weekdatas!==""?weekdatas.allmaxcloud:0} <span>km</span></p>
                                    <p><i className="fas fa-cloud" Style="color:orange"></i> &nbsp; {weekdatas!==""?weekdatas.allmincloud:0} <span>km</span></p>
                                </div>
                                <div className="Visibility Sunsetrise chAinW PopUp">
                                    <p>Pressure</p>
                                    <p><i className="fad fa-tire-pressure-warning" Style="color:orange"></i> &nbsp;{weekdatas!==""?weekdatas.allmaxpress:0} <span>hPa</span></p>
                                    <p><i className="fad fa-tire-pressure-warning" Style="color:orange"></i> &nbsp; {weekdatas!==""?weekdatas.allminpress:0} <span>hPa</span></p>
                                </div>
                                <div className="AirQuality Sunsetrise chAinW PopUp">
                                    <p>UVI</p>
                                    <p><i className="fad fa-sun" Style="color:orange"></i> &nbsp;{weekdatas!==""?weekdatas.allmaxuvi:0}</p>
                                    <p><i className="fad fa-sun" Style="color:orange"></i> &nbsp; {weekdatas!==""?weekdatas.allminuvi:0}</p>
                                </div>
                            </Cards>
                        </Highlights>
                    </Week>
                </ChangeBlock>
            </Container>
        </RightBlock>
    )
}

export default Right;