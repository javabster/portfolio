import React, { useEffect } from 'react';
import SkillRow from '../skills/SkillRow';
import SkillBar from '../skills/SkillBar';
import SkillLegendBar from '../skills/SkillLegendBar';

export default function SkillsBody(props) {

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'space-between', paddingBottom: '20px'}}>
            <div style={{paddingBottom: '75px', display: 'flex', flexDirection:'column'}}>
            <SkillLegendBar>
            </SkillLegendBar>
            <p style={{margin: 0, textAlign: 'center'}}>legend (hover for details)</p>
            </div>
        {props.skills.map((skill) => {
            return <SkillRow >
                    <div className='skill-name'>{skill.name}</div>
                    <SkillBar score={skill.score}></SkillBar>
                </SkillRow>
        })}
        </div>
    )
}