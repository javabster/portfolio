import React, { useState, useEffect } from 'react';
import './SkillBar.css';
import Bubble from './Bubble';
import LegendBar from './LegendBar';
import LegendInnerBar from './LegendInnerBar';

export default function SkillLegendBar(props) {
    const [bars, setBars] = useState([
        {id: 1, colour: 'transparent', showBubble:false, bubbleText: '1: Hello World!'},
        {id: 2, colour: 'transparent', showBubble:false, bubbleText: "2: I'm eager to learn"},
        {id: 3, colour: 'transparent', showBubble:false, bubbleText: '3: I can make problems'},
        {id: 4, colour: 'transparent', showBubble:false, bubbleText: "4: I'm confident with the basics"},
        {id: 5, colour: 'transparent', showBubble:false, bubbleText: '5: I can solve problems'},
        {id: 6, colour: 'transparent', showBubble:false, bubbleText: '6: People ask me to solve problems'},
        {id: 7, colour: 'transparent', showBubble:false, bubbleText: '7: I can confidently teach others'},
        {id: 8, colour: 'transparent', showBubble:false, bubbleText: '8: wizard'},
        {id: 9, colour: 'transparent', showBubble:false, bubbleText: '9: ninja'},
        {id: 10, colour: 'transparent', showBubble:false, bubbleText: "10: basically Tim Berners-Lee"},
    ])

    useEffect(() => {
        let newArray = [...bars];
        props.bubbleText.map((bubble, index) => {
            return newArray[index].bubbleText = props.bubbleText[index]
        })
        setBars(newArray);
        
    }, [props.bubbleText, bars])

    const setColour = index => {
       let newArray = [...bars];
       newArray[index].showBubble = true;
       var a = index;
       for (a=index; a >= 0; a-- ) {
           return newArray[a].colour = 'fill'
       }
       setBars(newArray);
    }

    const setTransparent = (index) => {
        let newArray = [...bars];
        newArray[index].showBubble = false;
       var a = index;
       for (a=index; a >= 0; a-- ) {
           return newArray[a].colour = 'transparent'
       }
       setBars(newArray);
    }

    return(
        <div className='outer-div'>
        {bars.map((bar, index) => {
         if (bar.showBubble) {
             return <Bubble score={bar.id}>{bar.bubbleText}</Bubble>
         }
        })}
            <LegendBar>
                {bars.map((bar, index) => 
                    <LegendInnerBar id={bar.id}
                            barColour={bar.colour}
                            onMouseEnter={() => setColour(index)}
                            onMouseLeave={() => setTransparent(index)}
                            >
                    </LegendInnerBar>
                )}
            </LegendBar>
        </div>
    )
}