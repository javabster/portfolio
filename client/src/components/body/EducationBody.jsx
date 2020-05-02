import React, { useState, useEffect } from 'react';
import TimelineItem from '../timeline/TimelineItem';

export default function EducationBody(props) {
    const { content, isLightTheme } = props;
    const [last, setLast] = useState(false)
return(
    <div style={{padding: '30px'}}>{
        content.map((ed, index) => {
            if (index == (content.length -1)) {
                return <TimelineItem isLightTheme={isLightTheme} title={ed.title} date={ed.date} content={ed.content} last></TimelineItem> 
            } 
            else {
            return <TimelineItem isLightTheme={isLightTheme} title={ed.title} date={ed.date} content={ed.content}></TimelineItem> 
            }
        }) }
    </div> 
)
}