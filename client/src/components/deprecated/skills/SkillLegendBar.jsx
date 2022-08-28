import React, { useState, useEffect } from 'react';
import './SkillBar.css';
import Bubble from './Bubble';
import LegendBar from './LegendBar';
import LegendInnerBar from './LegendInnerBar';

export default function SkillLegendBar(props) {
    const [bars, setBars] = useState([
        { id: 1, colour: 'transparent', showBubble: false, bubbleText: '1: Hello World!', fontSize: '18px' },
        { id: 2, colour: 'transparent', showBubble: false, bubbleText: "2: I'm eager to learn", fontSize: '16px' },
        { id: 3, colour: 'transparent', showBubble: false, bubbleText: '3: Ive used it a few times', fontSize: '14px' },
        { id: 4, colour: 'transparent', showBubble: false, bubbleText: "4: I'm confident with the basics", fontSize: '12px' },
        { id: 5, colour: 'transparent', showBubble: false, bubbleText: '5: I can solve problems', fontSize: '14px' },
        { id: 6, colour: 'transparent', showBubble: false, bubbleText: '6: People ask me to solve problems', fontSize: '12px' },
        { id: 7, colour: 'transparent', showBubble: false, bubbleText: '7: I can confidently teach others', fontSize: '12px' },
        { id: 8, colour: 'transparent', showBubble: false, bubbleText: '8: wizard', fontSize: '18px' },
        { id: 9, colour: 'transparent', showBubble: false, bubbleText: '9: ninja', fontSize: '16px' },
        { id: 10, colour: 'transparent', showBubble: false, bubbleText: "10: basically Tim Berners-Lee", fontSize: '9px' },
    ])

    useEffect(() => {
        let newArray = [...bars];
        props.bubbleText.map((bubble, index) => {
            newArray[index].bubbleText = props.bubbleText[index]
        })
        setBars(newArray);

    }, [props.bubbleText])

    const setColour = index => {
        let newArray = [...bars];
        newArray[index].showBubble = true;
        var a = index;
        for (a = index; a >= 0; a--) {
            newArray[a].colour = 'fill'
        }
        setBars(newArray);
    }

    const setTransparent = (index) => {
        let newArray = [...bars];
        newArray[index].showBubble = false;
        var a = index;
        for (a = index; a >= 0; a--) {
            newArray[a].colour = 'transparent'
        }
        setBars(newArray);
    }

    return (
        <div className='outer-legend-div'>
            {bars.map((bar, index) => {
                if (bar.showBubble) {
                    return <Bubble fontSize={bar.fontSize} type='legend' score={bar.id}>{bar.bubbleText}</Bubble>
                }
                return
            })}
            <LegendBar>
                {bars.map((bar, index) =>
                    <LegendInnerBar key={index} id={bar.id}
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