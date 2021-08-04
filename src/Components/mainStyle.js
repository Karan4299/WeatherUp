import styled from "styled-components";
// import React,{useContext} from "react";
// import MainContext from "./Provider/providerContext";





export const MainBLock = styled.div`
    background-color: ${props=>props.theme==="Light"?'rgb(214,215,219)':'rgb(62,62,62)'};
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
    display: none;
    /* display: grid; */
    grid-template-columns: 30% 70%;
    grid-template-rows: 100%;
    border-radius: 30px;
    overflow: hidden;
    /* opacity: 0; */

    @media (max-height:800px){
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