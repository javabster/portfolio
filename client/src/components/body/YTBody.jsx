import React, { useContext } from 'react';
import { AppContext } from '../app/App';

import VidBody from './VidBody';

export default function YTBody(props) {
    const { state } = useContext(AppContext);

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                gap: '50px',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginTop: '20px',
                marginLeft: state.isMobile ? '5%' : '20%',
                marginRight: state.isMobile ? '5%' : '20%'

            }}>
                {state.videos.videoList.map((video, idx) => {
                    return <VidBody style={{ width: '100%', height: '100%', position: 'relative', paddingBottom: '56.25%' }}>
                        <iframe
                            style={{ width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px' }}
                            src={`https://www.youtube.com/embed/${video.embedId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </VidBody>
                })}
            </div>
        </div >
    )
}