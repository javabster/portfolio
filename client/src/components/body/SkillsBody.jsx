import React, { useContext } from 'react';
import SkillRow from '../skills/SkillRow';
import SkillBar from '../skills/SkillBar';
import SkillLegendBar from '../skills/SkillLegendBar';
import { AppContext } from '../app/App';

export default function SkillsBody(props) {
    const {state} = useContext(AppContext);

    return(
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems:'center', 
            ustifyContent: 'space-between', 
            paddingBottom: '20px',
            width: '100%'
            }}>
            {/* <div style={{paddingBottom: '75px', display: 'flex', flexDirection:'column', width: '100%'}}> */}
            <SkillRow style={{width: '90%', paddingBottom:'75px', paddingTop: '75px'}}>
            <p style={{margin: 0, textAlign: 'center', width: '80px'}}>{state.skillsLegend.title}</p>
            <SkillLegendBar bubbleText={state.skillsLegend.bubbleText}>
            </SkillLegendBar>
            </SkillRow>
            {/* </div> */}
        {state.skills.skillsList.map((skill, index) => {
            return <SkillRow key={index} >
                    <div className='skill-name'>{skill.name}</div>
                    <SkillBar key={index} score={skill.score}></SkillBar>
                </SkillRow>
        })}
        </div>
    )
}