import React, { useContext } from 'react';
import { AppContext } from '../app/App';

import Body from './Body';

export default function YTBody(props) {
    const { state } = useContext(AppContext);

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
            }}>
                {state.videos.videoList.map((video, idx) => {
                    return <Body style={{ width: state.isMobile ? '100%' : '40%', padding: 0 }}><iframe
                        height={state.isMobile ? '180px' : '400px'}
                        src={`https://www.youtube.com/embed/${video.embedId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    /></Body>
                })}
            </div>
        </div >
    )
}