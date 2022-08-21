import React, { useContext } from 'react';
import { AppContext } from '../app/App';

export default function TalksBody(props) {
    const { state } = useContext(AppContext);

    return (
        <div style={{ paddingTop: '40px' }}>
            {state.talks.talksList.map((talk, idx) => {
                return <div>{talk.title}</div>
            })}
        </div>
    )
}