import React, { useState, useContext } from 'react';
import Button from '../shared/Button'
import Modal from './Modal';

import { AppContext } from '../app/App';
import * as actions from '../../actions/applicationActions';

export default function Feedback(props) {
    const [ isClicked, setIsClicked ] = useState(false);
    const { state, dispatch } = useContext(AppContext);

    return(
        <div style={{
            gridColumnStart: '2',
            gridColumnEnd: '2',
            gridRowStart: '3',
            display: 'flex',
            margin: '0 auto',
            padding: '20px'
        }}>
            <Button
                clicked={state.modalOpen}
                onClick={() => {
                    setIsClicked(true)
                    dispatch(actions.setFeedbackOpen(true))
                }}
            >Feedback</Button>
            <Modal isOpen={isClicked}></Modal>
        </div>
    )
}