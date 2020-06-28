import React, { useState, useEffect } from 'react';
import TimelineGrid from './TimelineGrid';
import TimelineDate from './TimelineDate';
import Diamond from './Diamond';
import TitleDropdown from './TitleDropdown';
import VerticalLine from './VerticalLine';
import TimelineContent from './TimelineContent';

import downArrow from '../../images/down-arrow.svg';
import upArrow from '../../images/up-arrow.svg'
import downArrowDarkTheme from '../../images/down-arrow-dark.svg';
import upArrowDarkTheme from '../../images/up-arrow-dark.svg'


export default function TimelineItem(props) {
    const { title, date, content, last, isLightTheme } = props
    const [isClicked, setIsClicked] = useState(false)
    const [itemHeight, setItemHeight] = useState('120px')
    const [arrow, setArrow] = useState(downArrow)

    useEffect(() => {
        if (isClicked && isLightTheme) {
            setItemHeight('200px');
            setArrow(upArrow)
        } else if (!isClicked && isLightTheme) {
            setItemHeight('120px');
            setArrow(downArrow)
        } else if (isClicked && !isLightTheme) {
            setItemHeight('200px');
            setArrow(upArrowDarkTheme)
        } else if (!isClicked && !isLightTheme) {
            setItemHeight('120px');
            setArrow(downArrowDarkTheme)
        }
    }, [isClicked, isLightTheme])

    function handleClick() {
        setIsClicked(!isClicked)
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px', height: 'fit-content'}}>
           <TimelineGrid isClicked={isClicked}>
            {/* <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}> */}
                <TimelineDate>{date}</TimelineDate>
                <Diamond isClicked={isClicked}></Diamond>
                { !last && <VerticalLine isClicked={isClicked}></VerticalLine>}
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    height:'100%', 
                    gridRowStart: '1', 
                    gridRowEnd: '3',
                    gridColumnStart: '3'
                    }}>
                <TitleDropdown isClicked={isClicked} onClick={() => handleClick()}>
                    {title}
                    <img alt='arrow' style={{height: '10px', width:'50px'}} src={arrow}></img>
                    </TitleDropdown>
                    { isClicked && <TimelineContent>
                        <p>
                        {content}
                        </p>
                    </TimelineContent>}
                </div>
                
            {/* </div> */}
            </TimelineGrid>
        </div>
    )
}