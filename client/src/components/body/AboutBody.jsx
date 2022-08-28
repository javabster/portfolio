import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../app/App';
import { SocialIcon } from 'react-social-icons';
import './AboutBody.scss';
import Body from './Body';

export default function AboutBody(props) {
    const { state } = useContext(AppContext);
    const [socialColour, setSocialColour] = useState('#8093F1')

    useEffect(() => {
        (state.mode === 'light') ? setSocialColour('#8093F1') : setSocialColour('#DFE4FB')
    }, [state.mode])

    return (
        <div style={{
            display: 'inline-grid', gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateTows: 'repeat(5, 1fr)'
        }}>
            <Body style={{ padding: '0', gridArea: '1 / 1 / 5 / 3' }}>
                <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={require('../../images/profile.png')} />
            </Body>
            <div style={{ gridArea: '1 / 3 / 2 / 6', display: 'flex', justifyContent: 'center' }}>
                <Body style={{ paddingLeft: '50px', paddingRight: '50px', width: '50%' }}>
                    <h1 style={{ fontSize: '50px', lineHeight: '55px' }}>{state.about.heading}</h1>
                </Body>
            </div>
            <Body style={{ gridArea: '2 / 3 / 5 / 6', fontSize: 'x-large', alignItems: 'center', lineHeight: '2em' }}>
                {state.about.description}
                <div style={{ width: '50%', padding: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <SocialIcon bgColor={socialColour} url='https://www.linkedin.com/in/abby-mitchell/' target="_blank"></SocialIcon>
                    <SocialIcon data-testid='github-link' bgColor={socialColour} url='https://github.com/javabster' target="_blank"></SocialIcon>
                    <SocialIcon bgColor={socialColour} url='https://twitter.com/javabster' target="_blank"></SocialIcon>
                </div>
            </Body>
        </div >
    )
}