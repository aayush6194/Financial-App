import React, {useState} from 'react';
import styled from 'styled-components';
import data from './Simulation.json'
import './simulation.css';
import {Grid} from '../../style/styled';

const Wrapper = styled.div`
    
`;

const Booths = styled.div`
font-size: 20pt;
font-weight:bolder;
text-align:center;
background-color:yellow;
padding:2vh;
margin: .5vh

&:active{
    background: blue;
}
`;


const BoothSelect = ({setSimStage, setCurrentBooth}:any) =>{

    const [boothSelection, setBooth] = useState(null);
    

    function goToBooth(){

        setSimStage("booth");
        setCurrentBooth(boothSelection);

        
    }


    const info = data.booths

    console.log(info.length)

    return(
        <Grid cols="1">
            

            {info.map((info:any, i: any )=> 
                <div>
                    <button 
                    style={{margin: "5px"}}
                    disabled={boothSelection === info.category}>
                        <Booths key={i} onClick={()=>setBooth(info.category)}>
                            {info.category}
                        </Booths>
                    </button>
                </div>)
            }

            {console.log(boothSelection)}
            <button className="btn" onClick={()=> goToBooth()}>GO!</button>
        </Grid>
    )

}

export default BoothSelect;
