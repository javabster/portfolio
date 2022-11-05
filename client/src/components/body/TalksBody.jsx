import React, { useContext } from 'react';
import { AppContext } from '../app/App';

import Tile from '../shared/Tile'
import Heading from '../shared/Heading';

export default function TalksBody(props) {
    const { state } = useContext(AppContext);

    return (
        <div>
            <Heading style={{ textAlign: 'center', margin: '20px' }}>Quantum Computing Talks</Heading>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {state.talks.talksList.map((talk, idx) => {
                    if (talk.type === 'quantum')
                        if (talk.videoLink == false) {
                            return <Tile key={idx} content={talk} buttonText='Get the Content!' width={state.isMobile ? '100%' : '25%'}></Tile>
                        }
                        else {
                            return <Tile key={idx} content={talk} buttonText='Watch Me!' width={state.isMobile ? '100%' : '25%'}></Tile>
                        }
                })}
            </div>
            <Heading style={{ textAlign: 'center', margin: '50px' }}>Other Talks</Heading>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {state.talks.talksList.map((talk, idx) => {
                    if (talk.type != 'quantum')
                        return <Tile key={idx} content={talk} buttonText='Watch Me!' width={state.isMobile ? '100%' : '25%'}></Tile>
                })}
            </div>
        </div>
    )
}