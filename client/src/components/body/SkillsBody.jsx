import React, { useContext } from 'react';
import SkillRow from '../skills/SkillRow';
import SkillBar from '../skills/SkillBar';
import SkillLegendBar from '../skills/SkillLegendBar';
import { AppContext } from '../app/App';

export default function SkillsBody(props) {
    const {state} = useContext(AppContext);

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'space-between', paddingBottom: '20px'}}>
            <div style={{paddingBottom: '75px', display: 'flex', flexDirection:'column'}}>
            <SkillLegendBar bubbleText={state.skillsLegend.bubbleText}>
            </SkillLegendBar>
            <p style={{margin: 0, textAlign: 'center'}}>{state.skillsLegend.title}</p>
            </div>
        {state.skills.skillsList.map((skill) => {
            return <SkillRow >
                    <div className='skill-name'>{skill.name}</div>
                    <SkillBar score={skill.score}></SkillBar>
                </SkillRow>
        })}
        </div>
    )
}