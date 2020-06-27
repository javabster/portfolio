import React, { useState, useContext, useEffect } from 'react';

import * as actions from '../../actions/applicationActions';
import { AppContext } from '../app/App'

import Body from '../body/Body';
import Overlay from './Overlay';
import ButtonRow from '../nav-bar/ButtonRow';
import Button from '../shared/Button';

import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { sendFeedback } from '../../utils/backendApi';

export default function(props) {
    const { isOpen } = props;
    const { state, dispatch } = useContext(AppContext);
    const [ isClosed, setIsClosed ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ value, setValue ] = useState(null);
    const [ rating, setRating ] = useState(null);

    useEffect(() => {
        // setIsClosed(false);
        // setIsSubmitted(false);
        console.log(rating)
    }, [rating])

    const StyledRating = withStyles({
        iconFilled: {
          color: '#FF2E33',
        },
        iconHover: {
          color: '#FF2E33',
        },
      })(Rating);

    const handleSubmit = async () => {
        console.log('DATA')
        console.log(rating);
        console.log(value);
        const feedbackState = {
            score: rating,
            comments: value
        }
        const res = await sendFeedback(feedbackState);
        console.log(res);
    }

    return(
        state.modalOpen && <Overlay>
            <Body style={{zIndex: '10000', padding:'30px 40px', margin:'0 auto', width: '50%', height:'50%'}}>
                <h1>Submit Feedback</h1>
                <h3>As a junior developer I'm always looking for ways to improve my work, if you have any thoughts please tell me!</h3>
                <form>
                    <h4 style={{marginBottom: '3px'}}>How do you like this website?</h4>
                    <StyledRating 
                        name="size-large" 
                        style={{padding:'0'}}
                        defaultValue={0} 
                        size="large"
                        value={rating}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        onChange={(event, newValue) => setRating(newValue)} />
                    <label style={{display: 'flex', flexDirection:'column', padding:'20px 0'}}>Any further comments:
                        <textarea 
                        rows={4} 
                        value={value} 
                        onChange={(event) => {setValue(event.target.value)}} />
                    </label>
                    <ButtonRow>
                    <Button clicked={isClosed} style={{marginLeft:'0'}} 
                        onClick={() => {
                        // setIsClosed(true)
                        dispatch(actions.setFeedbackOpen(false));
                        setValue(null);
                        setRating(null);
                        }}>
                        Cancel
                    </Button>
                    <Button clicked={isSubmitted} 
                    onClick={() => {
                        // setIsSubmitted(true)
                        dispatch(actions.setFeedbackOpen(false))
                        handleSubmit();
                        setValue(null);
                        setRating(null);
                        }}>
                        Submit
                    </Button> 
                </ButtonRow>
                </form>
            </Body>
        </Overlay>
    )
}