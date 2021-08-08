import React, { useContext,useEffect,useState } from 'react';
import { LeftBlock ,Container,Location,Logo,Temp,Day,HBar,Weather,Rain,IMG,BarLeftRIght} from './leftStyle';
import MainContext from '../Provider/providerContext';
import gsap from 'gsap';



const Left = ( props) => {
    const db = useContext(MainContext);
    const [time,setTime] = useState(""+new Date().getHours()+":"+new Date().getMinutes()+"");
    const current = db.state?db.state.current:"";
    const daily = db.state?db.state.daily:"";

    console.log(db?db.state:"");
    

    let cel =<span>&#8451;</span>;
    let fah = <span>&#8457;</span>;
    const moon=<i className="fas fa-moon"></i>;
    const sun = <i className="fas fa-sun"></i>;
    

    useEffect(()=>{ 
        const tl = gsap.timeline();
        tl.to(".PopUp",{duration:0,scale:0.95});
        tl.to(".PopUp",{duration:.2,delay:.4,opacity:1,scale:1,stagger:.05});

        setInterval(()=>{
            setTime(""+new Date().getHours()+":"+new Date().getMinutes()+"");
        },1000);
    },[]);

    
    return(
        <LeftBlock theme={db.theme}>
            <Container>
                <Location theme={db.theme}  className="PopUp">
                    <div className="logo"><i className="fad fa-map-marker-alt"></i></div>
                    <div theme={db.theme} className="City">{db.curCityname}</div>
                    <div onClick={props.searchfn(true)} className ="search"><i class="fad fa-search"></i></div>
                </Location>
                <BarLeftRIght temp={db.temp} className="PopUp">
                    <p onClick={db.changeTemp("C")}>&#8451;</p>
                    <p onClick={db.changeTemp("F")}>&#8457;</p>
                    <p onClick = {()=>db.theme==="Light"?db.changeTheme("Dark"):db.changeTheme("Light")}>{db.theme==="Light"?moon:sun}</p>
                </BarLeftRIght>
                {/* db.geticon(current?current.weather[0].main:"").color db.geticon(current?current.weather[0].main:"").icon> */}
                <Logo className="PopUp" color={db.geticon("Rain").color}>
                    {db.geticon("Rain").icon}
                </Logo>
                <Temp theme={db.theme} className="PopUp">
                    <div className="temp">{parseInt(db.getTemp(current?current.temp:0))} <sup>{db.temp==="C"?cel:fah}</sup></div>
                </Temp>
                <Day theme={db.theme} className="PopUp">
                    <p>{db.getDay(new Date().getDay())}, </p>
                    <p>{new Date().getHours()}:{new Date().getMinutes()}</p>
                </Day>
                <HBar className="PopUp"></HBar>
                <Weather theme={db.theme}  className="PopUp">
                    <p Style="color:orange"><i className="fas fa-cloud"></i></p>
                    <p>{current?current.weather[0].description:""}</p>
                </Weather>
                <Rain theme={db.theme} className="PopUp">
                    <p Style="color:blue"><i className="fad fa-raindrops"></i></p>
                    <p>{daily?daily[0].dew_point:""}</p>
                </Rain>
                <IMG theme={db.theme} className="PopUp">
                    <p>Developed By:<br/> <span>Karan B</span></p>
                    {/* <p>As a submission to Front End Test</p> */}
                </IMG>
            </Container>
        </LeftBlock>
    )
}

export default Left;