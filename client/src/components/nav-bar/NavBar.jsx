import React, { useContext } from 'react';
import Button from '../shared/Button';
import ButtonRow from './ButtonRow';

import { AppContext } from '../app/App';
import * as actions from '../../actions/applicationActions';

export default function NavBar(props) {
    const {state, dispatch} = useContext(AppContext);

    return(
        <ButtonRow className='nav-bar-row'>
        <Button 
          type='nav-bar' 
          clicked={state.tabOpen === 'about'} 
          onClick={() => { dispatch(actions.setTabOpen('about'));}}>
            {state.about.title}
        </Button>
        <Button 
          type='nav-bar' 
          clicked={state.tabOpen === 'education'} 
          onClick={() => { dispatch(actions.setTabOpen('education')); }}>
            {state.education.title}
        </Button>
        <Button 
          type='nav-bar' 
          clicked={state.tabOpen === 'work_exp'} 
          onClick={() => { dispatch(actions.setTabOpen('work_exp')); }}>
            {state.workExp.title}
        </Button>
        <Button 
          type='nav-bar' 
          clicked={state.tabOpen === 'skills'} 
          onClick={() => { dispatch(actions.setTabOpen('skills')); }}>
            {state.skills.title}
        </Button>
      </ButtonRow>
    )
};
