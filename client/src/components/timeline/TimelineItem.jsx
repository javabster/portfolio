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
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px', height: `${itemHeight}`}}>
           <TimelineGrid isClicked={isClicked}>
                <TimelineDate>{date}</TimelineDate>
                <Diamond isClicked={isClicked}></Diamond>
                <TitleDropdown isClicked={isClicked} onClick={() => handleClick()}>
                    {title}
                    <img style={{height: '50%', width:'50px'}}src={arrow}></img>
                </TitleDropdown>
                { !last && <VerticalLine isClicked={isClicked}></VerticalLine>}
                { isClicked && <TimelineContent>{content}</TimelineContent>}
            </TimelineGrid>
        </div>
    )
}