import React, { useEffect } from 'react';
import SkillRow from '../skills/SkillRow';
import SkillBar from '../skills/SkillBar';

export default function SkillsBody(props) {

    return(
        props.skills.map((skill) => {
            return <SkillRow >
                    <div className='skill-name'>{skill.name}</div>
                    <SkillBar score={skill.score}></SkillBar>
                </SkillRow>
        })
    )
}