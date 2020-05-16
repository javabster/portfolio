import React, {useContext} from 'react';
import ButtonColumn from './ButtonColumn';
import Button from '../shared/Button';
import { AppContext } from '../app/App';
import * as actions from '../../actions/applicationActions';

export default function ThemeButtons(props) {
    const {state, dispatch} = useContext(AppContext);

    return(
        <ButtonColumn >
        <Button 
          type='small'
          clicked={state.mode === 'light'} 
          onClick={() => dispatch(actions.setTheme('light'))}>
            {state.buttons.lightTitle}
        </Button>
        <Button 
          type='small' 
          clicked={state.mode === 'dark'} 
          onClick={() => dispatch(actions.setTheme('dark'))}>
            {state.buttons.darkTitle}
        </Button>
      </ButtonColumn>
    )
}