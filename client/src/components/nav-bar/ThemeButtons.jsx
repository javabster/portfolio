import React, { useContext } from 'react';
import ButtonRow from './ButtonRow';
import Button from '../shared/Button';
import { AppContext } from '../app/App';
import * as actions from '../../actions/applicationActions';

export default function ThemeButtons(props) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <ButtonRow >
      <Button
        type='small'
        clicked={state.mode === 'light'}
        onClick={() => dispatch(actions.setTheme('light'))}>
        Light Mode
      </Button>
      <Button
        type='small'
        clicked={state.mode === 'dark'}
        onClick={() => dispatch(actions.setTheme('dark'))}>
        Dark Mode
      </Button>
    </ButtonRow>
  )
}