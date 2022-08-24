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
        <div style={{ display: 'inline-grid', gridTemplateColumns: '1.5fr 3fr' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Body style={{ padding: '0' }}>
                    <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={require('../../images/profile.png')} />
                </Body>
            </div>
            <div style={{ display: 'inline-grid', gridTemplateRows: '1.5fr 3fr', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                    <Body style={{ paddingLeft: '50px', paddingRight: '50px', height: '100%' }}>
                        <h1 style={{ fontSize: '50px', lineHeight: '55px' }}>{state.about.heading}</h1>
                    </Body>
                    <Body style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '30%', height: '100%' }}>
                        <SocialIcon bgColor={socialColour} url='https://www.linkedin.com/in/abby-mitchell/' target="_blank"></SocialIcon>
                        <SocialIcon data-testid='github-link' bgColor={socialColour} url='https://github.com/javabster' target="_blank"></SocialIcon>
                        <SocialIcon bgColor={socialColour} url='https://twitter.com/javabster' target="_blank"></SocialIcon>
                    </Body>
                </div>
                <Body style={{ fontSize: 'x-large', padding: '50px', height: '70%' }}>
                    {state.about.description}
                </Body>
            </div>
        </div >
    )
}