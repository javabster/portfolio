import React, { useContext } from 'react';
import { AppContext } from '../app/App';

import Tile from '../shared/Tile'
import Body from '../body/Body'

export default function TalksBody(props) {
    const { state } = useContext(AppContext);

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '50px' }}>Quantum Computing Talks</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {state.talks.talksList.map((talk, idx) => {
                    if (talk.type === 'quantum')
                        return <Tile key={idx} content={talk} buttonText='Watch Me!' width='25%'></Tile>
                })}
            </div>
            <h1 style={{ textAlign: 'center', margin: '50px' }}>Other Talks</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {state.talks.talksList.map((talk, idx) => {
                    if (talk.type != 'quantum')
                        return <Tile key={idx} content={talk} buttonText='Watch Me!' width='25%'></Tile>
                })}
            </div>
        </div>
    )
}