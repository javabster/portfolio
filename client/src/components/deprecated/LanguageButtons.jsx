import React, { useContext, useState } from 'react';
import ButtonColumn from '../nav-bar/ButtonColumn';
import LangButton from '../shared/LangButton';

import ukFlagLight from '../../images/uk-light.svg'
import ukFlagDark from '../../images/uk-dark.svg'
import cnFlagLight from '../../images/cn-light.png'
import cnFlagDark from '../../images/cn-dark.svg'

import { AppContext } from '../app/App';
import * as actions from '../../actions/applicationActions';

export default function LanguageButtons(props) {
    const { state, dispatch } = useContext(AppContext);

    const [ukFlag, setUkFlag] = useState(ukFlagDark);
    const [cnFlag, setCnFlag] = useState(cnFlagLight);

    return (
        <ButtonColumn right>
            <LangButton
                clicked={state.language === 'english'}
                onClick={() => {
                    dispatch(actions.setLanguage('english'))
                    setUkFlag(ukFlagDark);
                    setCnFlag(cnFlagLight);
                }}>
                <img alt='uk flag' style={{ boxSizing: 'border-box', width: '100%', height: '100%' }} src={ukFlag}></img>
            </LangButton>
            <LangButton
                clicked={state.language === 'chinese'}
                onClick={() => {
                    dispatch(actions.setLanguage('chinese'));
                    setUkFlag(ukFlagLight);
                    setCnFlag(cnFlagDark);
                }}>
                <img alt='china flag' style={{ boxSizing: 'border-box', width: '100%', height: '100%' }} src={cnFlag}></img>
            </LangButton>
        </ButtonColumn>
    )
}