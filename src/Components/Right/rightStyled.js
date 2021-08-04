import styled from "styled-components";
// var textcolor=new Date().getHours()>19?"rgb(192,192,192)":"black";
var Hbarwhite = "3px solid black";
var Hbardark = `3px solid white`;


export const RightBlock = styled.div`
    width:100%;
    height:100%;
    background-color: ${props=>props.theme==="Dark"?"rgb(31,31,31)":"rgb(247,246,249)"};
    transition: all .5s;
    padding:5% 5%;

    @media (max-width:1000px){
        padding:5% 4%;
    }

    /* @media (max-width:750px){
        padding:7% 4%;
    } */
`;

export const Container = styled.div`
    width: 100%;
    height:100%;
    /* background-color: salmon; */
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
`;

export const Bar = styled.div`
    /* background-color: sandybrown; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BarLeft = styled.div`
    /* background-color: thistle; */
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color:${props=>props.theme==="Dark"?"rgb(192,192,192)":"black"};
    transition: all .5s;
    opacity: 0;

    
    @media (max-width:1000px){
        width:30%;
    }
    
    @media (max-width:750px){
        width:30%;
    }

    @media (max-width:500px){
        width:40%;
    }

    p{
        width: 35%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 1.7em;
        height: 40%;
        cursor: pointer;
        color: ${props=>props.theme==="Dark"?"grey":"black"};
        transition: all .5s;
        /* margin-bottom: 5px; */
        /* margin-bottom: 1em; */

        :first-child{
            /* background-color: yellow; */
            /* padding:10px; */
            
            border-bottom: ${props=>props.current==="Today"?(props=>props.theme==="Dark"?Hbardark:Hbarwhite):"none"};
            font-weight: ${props=>props.current==="Today"?"bold":"none"};
        }

        :last-child{
            font-weight:${props=>props.current==="Week"?"bold":"normal"};
            border-bottom: ${props=>props.current==="Week"?(props=>props.theme==="Dark"?Hbardark:Hbarwhite):"none"};
        }

        @media (max-height:750px){
            height:40%;
        }
        @media (max-width:750px){
            width:45%;
            height: 60%;
            padding-bottom: 10px;
            font-size: 1.6em;
        }

        @media (max-width:500px){
            width:45%;
            height: 60%;
            padding-bottom: 10px;
            font-size: 1.5em;
        }

        @media(max-height:745px) and (max-width:750px){
            height:80%;
        }
    }

`;

export const BarRight = styled.div`
    /* background-color: tomato; */
    width:25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 0;
    
    @media (max-width:1000px){
        width:35%;
    }

    @media (max-width:750px){
        display: none;
    }

    p{
        padding:1em;
        background-color: rgb(25,25,25);
        height:3.5em;
        width:3.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.4em;
        font-weight: bold;
        transition: all .5s;

        :nth-child(1){
            height:3em;
            width:3em;
            border-radius: 50%;
            color:${props=>props.temp==="C"?"white":"black"};
            background-color: ${props=>props.temp==="C"?"black":"white"};
            cursor: pointer;
        }
        
        :nth-child(2){
            height:3em;
            width:3em;
            border-radius: 50%;
            color:${props=>props.temp==="F"?"white":"black"};
            background-color: ${props=>props.temp==="F"?"black":"white"};
            cursor: pointer;
        }

        :last-child{
            border-radius: 1em;
            color:white;
        }
    }

    

`;

export const ChangeBlock = styled.div`
    /* background-color: seashell; */
    display: flex;
    flex-direction: column;
`;

export const Today = styled.div`
    /* background-color: slategray; */
    
    width:100%;
    height: 100%;
    
    display: ${props=>props.current==="Today"?"grid":"none"};
    transition: all .5s;
    grid-template-columns: 100%;
    grid-template-rows: 35% 65%;
`;

export const LineBlock = styled.div`
/* background-color: red; */
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

    p{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 1.4em;
        font-weight: bold;
        color:${props=>props.theme==="Dark"?"rgb(192,192,192)":"black"};
        transition: all .5s;
    }
`;

export const Highlights = styled.div`
    width:100%;
    height:100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top:1%;


    p{  
        font-size: 1.5em;
        font-weight:bold;
        height: 8%;
        /* background-color: pink; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color:${props=>props.theme==="Dark"?"rgb(192,192,192)":"black"};
        transition: all .5s;
        opacity: 0;
    }
`;

export const Cards = styled.div`
    margin-top:2%;
    display:grid;
    grid-template-rows: 47% 47%;
    grid-template-columns: 32% 32% 32%;
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    height:100%;
    


    div{
        background-color: ${props=>props.theme==="Dark"?'rgb(51,51,51)':"white"};
        width: 100%;
        border-radius: 1.5em;
        padding:1.5em;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:flex-start;
        transform: scale(1);
        transition: all .3s;
        color: ${props=>props.theme==="Dark"?'white':"black"};
        opacity: 0;

        :hover{
            transform: scale(1.05);
            box-shadow: 5px 5px 30px 2px #b8b8b8
        }

        p{  

            display: flex;
            flex-direction: row;
            align-items: center; opacity: 1;
            
            :first-child{
                font-size: 1.4em;
                height:20%;
                font-weight: 500;
                color: rgb(200,200,200);
            }

            :nth-child(2){
                height:60%;
                font-size: 4.5em;
                font-weight: 400;
                
                span{
                    font-size:.4em;
                }

                @media(max-width:750px){
                    font-size: 3.5em;
                }

                @media(max-width:500px){
                    font-size: 3em;
                }

                @media(max-width:400px){
                    font-size: 2.5em;
                }

                @media (max-width:343) and (max-height:635px){
                    font-size: 1.65em;
                }

                @media(max-width:375px){
                    font-size: 2em;
                }
            }

            :last-child{
                height: 20%;
                font-size: 1.3em;
            }
        }
    }

    div.Sunsetrise{
        background-color: ${props=>props.theme==="Dark"?'rgb(51,51,51)':"white"};
        width: 100%;
        border-radius: 1.5em;
        padding:1.5em;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:flex-start;

        @media (max-width:750px){
            padding:1em;

        }

        p{
            display: flex;
            flex-direction: row;
            align-items: center; 

            :first-child{
                font-size: 1.4em;
                height:20%;
                font-weight: 500;
                color:rgb(190,190,190);

                @media (max-width:750px){
                    height: 40%;
                    font-size: 1.2em;
                }
            }

            :nth-child(2){
                height:40%;
                font-size: 2.5em;
                font-weight: 400;
                /* background-color: lavenderblush; */
                
                span{
                    font-size:.5em;
                }

                @media(max-width:750px){
                    font-size: 2em;
                    height: 30%;
                }
                @media (max-height:720px){
                    font-size: 1.7em;
                }

                @media(max-width:500px){
                    font-size: 1.7em;
                }

                @media(max-width:400px){
                    font-size: 1.7em;
                }
                @media (max-width:363px){
                    font-size: 1.65em;
                }

                
            }

            :nth-child(3){
                height:40%;
                font-size: 2.5em;
                font-weight: 400;
                /* background-color:yellow; */
                
                span{
                    font-size:.5em;
                }

                @media(max-width:750px){
                    font-size: 2em;
                    height: 30%;
                }

                @media (max-height:720px){
                    font-size: 1.7em;
                }

                @media(max-width:500px){
                    font-size: 1.7em;
                }


                @media(max-width:400px){
                    font-size: 1.7em;
                }

                @media (max-width:363px){
                    font-size: 1.65em;
                }
            }
        }
    }
`;

export const Week = styled.div`
    /* background-color: teal; */
    width:100%;
    height: 100%;
    display:${props=>props.current==="Week"?"grid":"none"};
    transition: all .5s;
    /* display: grid; */
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;

    div{
        width:100%;
        height:99%;
        /* background-color: red; */
    }
`;