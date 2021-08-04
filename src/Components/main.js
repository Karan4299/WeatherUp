import React,{useContext, useState,useEffect,useRef} from  'react';
import { MainBLock,Container,Init,NameInit,Controller,Btn } from './mainStyle';
import Left from './Left/left';
import Right from './Right/right';
import gsap from 'gsap';
import MainContext from './Provider/providerContext';

const Main = () => {
    let main = useRef();
    let name = useRef();
    let cntrl = useRef();
    let btn = useRef();
    let cont = useRef();
    let init = useRef();
    const db = useContext(MainContext);
    const [access,setAcc] =useState(false);
    const [access2,setAcc2] = useState(false);


    useEffect(()=>{
        console.log(cont)
        let tl = gsap.timeline();
        tl.to(name,{duration:0,display:"flex"});
        tl.to(name,{duration:.5,delay:1,opacity:1})
        tl.to(name,{duration:.5,delay:1,y:-30});
        tl.to(cntrl,{duration:0,delay:.3,display:"flex"});
        tl.to(cntrl,{duration:.3,opacity:1,y:-20});
        tl.to(btn,{duration:0,delay:0,display:"flex"});
        tl.to(btn,{duration:.3,opacity:1,y:-10});
    },[]);


    const changeTme = (theme) => () => {
        clickedacc();
        if(theme!==db.theme){
            db.changeTheme(theme);
            // let tl = gsap.timeline();
            
            
            if(theme==="Light"){
                gsap.to(main,{duration:.2,backgroundColor:"rgb(214,215,219)"});
                gsap.to(name,{duration:.2,color:"black"});
                gsap.to(".lab",{duration:.2,color:"black"});
                gsap.to(btn,{duration:.2,backgroundColor:"orange",color:"white"});
            }else{
                gsap.to(main,{duration:.2,backgroundColor:"rgb(62,62,62)"});
                gsap.to(name,{duration:.2,color:"white"});
                gsap.to(".lab",{duration:.2,color:"white"});
                gsap.to(btn,{duration:.2,backgroundColor:"orange"});
            }
            
        }
    }

    const clickedacc = () =>{
        setAcc2(true);
    }

    const donebtn = () => {
        if(db.state && access2){
            let tl = gsap.timeline();
            
            tl.to(".PopUp",{duration:.3,delay:.1,opacity:0,y:-40,stagger:.1});
            tl.to(init,{duration:0,display:"none"});
            tl.to(".cont",{duration:0,display:"grid"})
            tl.to(".cont",{duration:1,delay:.2,opacity:1});
            // tl.to(cont,{duration:.1,delay:.2,display:"grid"});

            setTimeout(()=>{
                setAcc(true);
            },1000)
        }
    }


    return(
        <MainBLock ref={el=>main=el} theme={db.theme}>
            <Init ref={el=>init=el}>
                <NameInit className="PopUp" ref={el=>name=el}><span>Weather</span><span>.</span></NameInit>
                <Controller className="PopUp" ref={el=>cntrl=el}>
                    <div>
                        <input type="radio" id="light" name="fav_language" value="Light"   onChange={changeTme("Light")}/>
                        <label className="lab" for="light">Light</label>
                    </div>
                    <div>
                        <input type="radio" id="dark" name="fav_language" value="Dark"  onChange={changeTme("Dark")}/>
                        <label className="lab"  for="dark">Dark</label>
                    </div>
                </Controller>
                <Btn onClick={donebtn} className="PopUp" ref={el=>btn=el}>
                    {db.state?(access2?"Done":"Choose") :"Loading"}
                </Btn>
            </Init>
            <Container className="cont">
                {access?<React.Fragment><Left></Left>
                <Right></Right></React.Fragment>:""};
                
            </Container>

            {/* <Container className="cont">
                <React.Fragment><Left></Left>
                <Right></Right></React.Fragment>
                
            </Container> */}

            
            
        </MainBLock>
    )
}

export default Main;
