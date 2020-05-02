import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import './AboutBody.scss';

export default function AboutBody(props) {
    const { aboutTitle, aboutContent, isLightTheme } = props;
    const [ socialColour, setSocialColour ] = useState('#8093F1')

    useEffect(() => {
        isLightTheme ? setSocialColour('#8093F1') : setSocialColour('#DFE4FB')
    }, [isLightTheme])

    return(
        <div className='about-column'>
            <div style={{fontSize: '50px'}}>{aboutTitle}</div>
            <div>{aboutContent}</div>
            <div className='social-row'>
            <SocialIcon bgColor={socialColour} url='https://www.linkedin.com/in/abby-mitchell/' target="_blank"></SocialIcon> 
            <SocialIcon bgColor={socialColour} url='https://github.com/javabster' target="_blank"></SocialIcon> 
            <SocialIcon bgColor={socialColour} url='https://twitter.com/javabster' target="_blank"></SocialIcon>
           </div>
        </div>
    )
}