import React from 'react';
import TimelineItem from '../timeline/TimelineItem';

export default function EducationBody(props) {
    const { content, isLightTheme } = props;

return(
    <div>{
        content.map((ed, index) => {
            if (index === (content.length -1)) {
                return <TimelineItem key={index} isLightTheme={isLightTheme} title={ed.title} date={ed.date} content={ed.content} last></TimelineItem> 
            } 
            else {
            return <TimelineItem key={index} isLightTheme={isLightTheme} title={ed.title} date={ed.date} content={ed.content}></TimelineItem> 
            }
        }) }
    </div> 
)
}