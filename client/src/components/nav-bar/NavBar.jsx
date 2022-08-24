import React, { useContext } from 'react';
import Button from '../shared/Button';
import ButtonRow from './ButtonRow';

import { AppContext } from '../app/App';
import * as actions from '../../actions/applicationActions';

export default function NavBar(props) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <ButtonRow className='nav-bar-row'>
      <Button
        type='nav-bar'
        clicked={state.tabOpen === 'about'}
        onClick={() => { dispatch(actions.setTabOpen('about')); }}>
        {state.about.title}
      </Button>
      <Button
        type='nav-bar'
        clicked={state.tabOpen === 'blogs'}
        onClick={() => { dispatch(actions.setTabOpen('blogs')); }}>
        {state.blogs.title}
      </Button>
      <Button
        type='nav-bar'
        clicked={state.tabOpen === 'talks'}
        onClick={() => { dispatch(actions.setTabOpen('talks')); }}>
        {state.talks.title}
      </Button>
    </ButtonRow>
  )
};
