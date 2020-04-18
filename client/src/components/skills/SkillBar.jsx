import React from 'react';
import './SkillBar.css';
import Bubble from './Bubble';
import Bar from './Bar';

export default function SkillBar(props) {
    return(
        <div className='outer-div'>
        <Bubble></Bubble>
            <Bar>
                <div className='inner-bar'></div>
            </Bar>
        </div>
    )
}