import styled from "styled-components";
// import React,{useContext} from "react";
// import MainContext from "./Provider/providerContext";





export const MainBLock = styled.div`
    background-color: ${props=>props.theme==="Light"?'rgb(214,215,219)':'rgb(62,62,62)'} !important;
    transition: all .5s;
    height:100vh;
    width:100vw;
    min-height: 600px;
    min-width: 330px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    position: relative;
`;

export const Init = styled.div`
    min-width:270px;
    min-height:350px;
    /* background-color: khaki; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NameInit = styled.div`
    display: none;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 4.5em;
    font-weight: bold;
    opacity: 0;
    /* width:100%; */

    span{
        :last-child{
            color:red;
        }
    }
`;

export const Controller = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    background-color: rgba(255, 255, 255, .15);
    border-radius:1em;  
    /* background-color: yellow; */
    backdrop-filter: blur(5px);
    opacity: 0;
    width: 100%;
    height: 3em;
    padding:0 1em;
    font-weight: bold;

    div{
        width: 50%;
        font-size: 1.5em;
        display: flex;
        flex-direction: row;
        align-items: center;
        /* height: 3em; */
        label{
            margin-left:.5em;
        }
    }
`;

export const Btn = styled.div`
    display: flex;
    /* align-self: flex-start; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:25%;
    height:2em;
    background-color: orange;
    opacity: 0;
    border-radius: .5em;
    font-size: 1.5em;
    color:white;
    font-weight: bold;
    cursor: pointer;
`;

export const Container = styled.div`
    /* background-color: red; */
    height:90%;
    width:80%;
    /* display: none; */
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 100%;
    border-radius: 30px;
    overflow: hidden;
    transition: all .5s;
    /* opacity: 0; */

    @media (max-height:700px){
        height:100%;
        width:90%;
    }

    @media (max-width:1400px){
        width:100%;
        height:100%;
        border-radius:0;
    }

    @media (max-width:1000px){
        grid-template-columns: 35% 65%;
    }

    @media (max-width:750px){
        grid-template-columns: 100% ;
        grid-template-rows: 30% 70%;
    }

    @media (max-width:500px){
        grid-template-columns: 100% ;
        grid-template-rows: 29% 71%;
    }
`;

export const SearchBlock = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.4);
    display:flex;
    flex-direction: column;
    padding:5% 10%; 
    transition:all .5s;
    /* opacity: 0; */
    /* justify-content: ; */
    /* margin-bottom: 5%; */

    @media (max-height:700px){
        padding:0% 5%;
        /* width:90%; */
    }

    @media (max-width:1400px){
        padding:0% 0%;
    }

    

    div.Container{
        width:30%;
        height:100%;
        /* background-color: rgba(233, 212, 96, .2); */
        display:flex;
        flex-direction: column;
        /* justify-content:flex-start ; */
        align-items: flex-start;
        padding:1% 3%;
        transition:all .5s;

        

        @media (max-width:1000px){
            width: 35%;
        }
        @media (max-width:750px){
            width:50%;
            height:30%;
        }

        @media (max-width:500px){
            width:55%;
            height:29%;
        }
        

        /* @media (max-width:1400px){
            width:100%;
            height:29%;
        } */
    }
`;

export const Bar = styled.div`
    width:100%;
    height: 9%;
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 100%;
    /* background-color: royalblue; */
    margin-bottom: 5%;

    @media (max-width:750px){
        height: 20%;
    }

    /* @media (max-width:500px){
        height: 20%;
    } */
    

    div.SearchBar{
        height:100%;
        width: 100%;
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        input{
            width: 100%;
            height:90%;
            border-radius: 5px;
            /* background-color: rgb(202,202,202); */
            border:none;
            padding:0% 5%;

            :focus{
                outline: none;
            }
        }
    }

    div.Cancel{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: salmon; */

        i{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* background-color: seagreen; */
            width: 28px;
            height: 28px;
            border-radius: 50%;
            /* color:rgb(202,202,202); */
            /* border-radius: 50px; */
            background: #ffffff;
            box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;
            font-size: 1.2em;
        }
    }
`;

export const Results = styled.div`
    width:80%;
    max-height:40%;
    /* background-color: royalblue; */
    border-radius: 5px;
    /* background-color: #ffffff; */
    /* padding: 5%; */
    overflow: scroll;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width:750px){
            max-height:50%;
    }


    ::-webkit-scrollbar{
            display:none;
    }


    div.ResBlock{
        /* background-color: sandybrown; */
        width: 100%;

        
        
        

        div.CityName{
            /* background-color: seashell; */
            height:50px;
             background-color: #ffffff;
             margin-bottom: 5%;
             border-radius: 5px;
            /* border-bottom: 2px solid rgba(202,202,202.5); */
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: flex-start;
            font-size: 1.5em;
            padding:0% 5%;
            font-weight: bold;
            cursor: pointer;
        }
    }
`;

export const Loading = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



// 

