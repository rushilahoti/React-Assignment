import React, { Component } from 'react'
import Card from './card'

class CardDetails extends Component{
     details=[
        {key:'d1', class:'card pos1 ', color:'rgb(67,104,86)',text:"Your limitation it's only your imagination"},
        {key:'d2', class:'card pos2 row-inline', color:'rgb(47,55,120)',text:"Great things never come from confort zone."},
        {key:'d3', class:'card pos3', color:'rgb(232,157,200)',text:"Dream it.Wish it. Do it."},
        {key:'d4', class:'card pos4', color:'rgb(142,148,146)',text:"Stay Focused. "},
        {key:'d5', class:'card pos5', color:'rgb(155,215,241)',text:"Be Unstoppable. Be Confident."},
        {key:'d6', class:'card pos6', color:'rgb(37, 150, 190)',text:"Always Be Happy."},
    ]
    render()
    { 
        return(
         this.details.map((value)=>{
             console.log(value);
             return <Card key={value.key} class={value.class} color={value.color} text={value.text}/> 
         })
        )
    }
}
export default CardDetails;