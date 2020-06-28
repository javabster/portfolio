import React from 'react';
import './SkillBar.css';
import Bubble from './Bubble';
import Bar from './Bar';

export default function SkillBar(props) {
    const { score } = props
    return(
        <div className='outer-div'>
        <Bubble fontSize='16px' type='skill' score={score}>{score}</Bubble>
            <Bar score={score}>
                <div className='inner-bar'></div>
            </Bar>
        </div>
    )
}