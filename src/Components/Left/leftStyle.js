import styled from "styled-components";

export const LeftBlock = styled.div`
    height:100%;
    width:100%;
    background-color: ${props=>props.theme==="Dark"?"rgb(48,48,48)":"white"};
    padding:12% 10%;
    transition: all .5s;

    @media (max-width:750px){
        padding:2% 4%;
    }
`;

export const Container = styled.div`
    height: 100%;
    width:100%;
    /* background-color: red; */
    display:grid;
    grid-template-rows: 5% 40% 10% 10% auto 6% 6% 15%;
    grid-template-columns: 100%;

    @media (max-width:750px){
        grid-template-columns: 50% 50%;
        grid-template-rows: 15% 54% 10% 1% 10% 10%;
    }
`;

export const Location = styled.div`
    /* background-color: rosybrown; */
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 100%;
    opacity: 0;
    svg{
        color:red;
    }

    div{
        align-self: center;
        justify-self: flex-start;
    }
    div.logo{
        font-size: 20px;
        color:orange
        
    }

    div.City{
        font-weight: bold;
        font-size: 1.8em;
        color:${props=>props.theme==='Light'?'black':'rgb(192,192,192)'};
        transition: all .5s;
        /* background-color: silver; */
    }

    div.search{
        color:orange;
        font-size: 20px;
        cursor: pointer;

        @media (max-width:750px){
            /* justify-self:flex-end; */
        }
    }

    @media (max-width:750px){
        grid-column-start: 1;
        grid-column-end: 1;
        grid-template-columns: 10% 60% 70%;
    }

`;

export const BarLeftRIght = styled.div`
    /* background-color: tomato; */
    width:40%;
    /* align-self: flex-end; */
    display: none;
    justify-self: flex-end;
    opacity: 0;


    @media (max-width:750px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        width:50%;
    }

    @media (max-width:550px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:70%;
    }

    

    p{
        padding:1em;
        background-color: rgb(25,25,25);
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.4em;
        font-weight: bold;
        height:3em;
        width:3em;
        transition: all .5s;

        @media (max-width:750px){
            height: 2em;
            width:2em;
        }

        @media (max-width:618px){
            height: 1.8em;
            width:2em;
        }

        :nth-child(1){
            
            border-radius: 50%;
            color:${props=>props.temp==="C"?"white":"black"};
            background-color: ${props=>props.temp==="C"?"black":"white"};
            cursor: pointer;
        }
        
        :nth-child(2){
            border-radius: 50%;
            color:${props=>props.temp==="F"?"white":"black"};
            background-color: ${props=>props.temp==="F"?"black":"white"};
            cursor: pointer;
        }

        :last-child{
            height:3.5em;
            width:3.5em;
            border-radius: 1em;
            color:white;
            
            
            @media (max-width:750px){
                border-radius: .5em;
                height: 2.5em;
                width:2.5em;
            }
        }
    }
`;

export const Logo = styled.div`
    /* background-color: royalblue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18em;
    color:${props=>props.color};
    /* transition: all .5s; */
    opacity: 0;
    i{
        text-shadow: 3px 3px 200px  ${props=>props.color};
    }
    @media (max-width:750px){
        grid-row-start: 2;
        grid-row-end: 7;
        justify-self: flex-start;
        align-self: flex-end;
        font-size: 15em;
    }

    @media (max-width:500px){
        font-size: 13em;
    }

    @media (max-height:720px){
        font-size: 13em;
    }

    @media (max-height:669px) and (max-width:750px){
        font-size: 11em;
    }

    /* @media (max-height:500px){
        font-size: 11em;
    } */

    @media (max-width:380px){
        font-size: 11em;
    }

    

`;

export const Temp = styled.div`
    /* background-color: salmon; */
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    opacity: 0;
    color:${props=>props.theme==="Dark"?'rgb(192,192,192)':'black'};
    transition: all .5s;

    div.temp{
        font-size: 8em;
        span{
            font-size: .7em;
        }
    }

    @media (max-width:750px){
        justify-self: flex-end;
        align-self: flex-end;
        grid-row-start: 2;
        grid-row-end: 3;
        
        div.temp{
        font-size: 7em;
        span{
            font-size: .5em;
            }
        }
    }

    @media (max-width:500px){
        
        div.temp{
        font-size: 5.5em;
            span{
                font-size: .4em;
            }
        }
    }

    @media (max-width:379px){
        div.temp{
        font-size: 4.5em;
            span{
                font-size: .35em;
            }
        }
    }
    


`;

export const Day = styled.div`
    /* background-color: sandybrown; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    opacity: 0;
    transition: all .5s;

    p{
        font-size: 1.7em;
        letter-spacing:.1em;
        color:${props=>props.theme==="Dark"?'rgb(192,192,192)':'black'};
        transition: all .5s;
    }

    p:last-child{
        color:grey;
    }

    @media (max-width:750px){
        justify-self: flex-end;
        /* align-self: flex-end; */
    }

    @media (max-width:500px){
        p{
            font-size: 1.5em;
        }
        /* align-self: flex-end; */
    }
    
`;

export const HBar = styled.div`
    /* background-color: seagreen; */
    margin-bottom: 10%;
    border-bottom: 1px solid rgb(240,240,240);
    opacity: 0;
    @media (max-width:750px){
        width:60%;
        justify-self: flex-end;
    }
`;

export const Weather = styled.div`
    /* background-color: seashell; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    opacity: 0;
    /* grid-template-rows: 100%; */
    /* grid-template-columns: 15% 85%; */
    /* width:100%; */
    p{
        font-size: 1.7em;
        color:${props=>props.theme==="Dark"?'rgb(192,192,192)':'black'};
        transition: all .5s;
    }

    p:first-child{
        /* background-color: red; */
        margin-right: 3%;
    }

    p:last-child{
        /* background-color: pink; */
    }

    @media (max-width:750px){
        /* background-color: royalblue; */
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        
        p:first-child{
            margin-right: .5em;
        } 
        /* align-self: flex-end; */
    }

    @media (max-width:500px){
        p{
            font-size: 1.5em;
        }
    }
    

    /* @media (max-height:600),(max-width:850px){ 
        
    } */
`;

export const Rain = styled.div`
    /* background-color: sienna; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    opacity: 0;
    
    p{
        /* justify-self: flex-start; */
        /* align-self: center; */
        font-size: 1.7em;
        color:${props=>props.theme==="Dark"?'rgb(192,192,192)':'black'};
        transition: all .5s;
    }

    p:first-child{
        margin-right: 3%;
    }

    @media (max-width:750px){
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        justify-self: flex-end;
        /* align-self: flex-end; */
        p:first-child{
            margin-right: .5em;
        }
        
    }


    @media (max-width:500px){
        p{
            font-size: 1.5em;
        }
    }
`;

export const IMG = styled.div`
    background-color: rgba(255, 255, 255, .15);
    border-radius: 1em;
    opacity: 0;
    backdrop-filter: blur(5px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:1em;
    color:${props=>props.theme==="Dark"?'rgb(192,192,192)':'black'};
    transition: all .5s;

    @media (max-width:750px){
        display: none;
    }

    p{  
        font-size: 1em;
        color:${props=>props.theme==="Dark"?'rgb(192,192,192)':'black'};
        transition: all .5s;

        span{
            font-size: 1.4em;
            font-weight: bold;
        }
    }
`;