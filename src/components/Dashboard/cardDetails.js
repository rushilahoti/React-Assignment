import React, { Component } from 'react'
import Card from './card'

const CardDetails= ()=>{
   const details = [
        { key: 'd1', class: 'pos1', color: 'rgb(67,104,86)', text: "Your limitation it's only your imagination" },
        { key: 'd2', class: 'pos2', color: 'rgb(47,55,120)', text: "Great things never come from comfort zone." },
        { key: 'd3', class: 'pos3', color: 'rgb(232,157,200)', text: "Dream it.Wish it. Do it." },
        { key: 'd4', class: 'pos4', color: 'rgb(142,148,146)', text: "Stay Focused. " },
        { key: 'd5', class: 'pos5', color: 'rgb(155,215,241)', text: "Be Unstoppable. Be Confident." },
        { key: 'd6', class: 'pos6', color: 'rgb(37, 150, 190)', text: "Always Be Happy." },
    ]

    
        return (
            <>
                <div className="posMain">
                    {
                        details.map((value) => 

                             <Card key={value.key} class={value.class} color={value.color} text={value.text} />
                        )
                    }

                </div>
            </>
        )
    }

export default CardDetails;