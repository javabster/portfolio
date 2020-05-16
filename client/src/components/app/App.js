import React, { useEffect, useState, createContext, useReducer } from 'react';
import Wrapper from './Wrapper';
import Button from '../shared/Button';
import LangButton from '../shared/LangButton';
import ButtonColumn from '../nav-bar/ButtonColumn';
import NavBar from '../nav-bar/NavBar';

import Body from '../body/Body';
import SkillsBody from '../body/SkillsBody';
import AboutBody from '../body/AboutBody'
import EducationBody from '../body/EducationBody';
import applicationReducer, { defaultState } from '../../reducers/applicationReducer';
import * as actions from '../../actions/applicationActions';

import { getAboutMe, getSkills, getEducation, getLegend, getButtonDetails } from '../../utils/backendApi';

import '../../fonts/Aldrich/Aldrich-Regular.ttf'
import './App.css';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import { clearInterval } from 'timers';
import ukFlagLight from '../../images/uk-light.svg'
import ukFlagDark from '../../images/uk-dark.svg'
import cnFlagLight from '../../images/cn-light.png'
import cnFlagDark from '../../images/cn-dark.svg'

const AppContext = createContext(null)

function App() {
  const [state, dispatch ] = useReducer(applicationReducer, defaultState)
  const [isLightTheme, setTheme] = useState(true);
  const [isLightClicked, setIsLightClicked ] = useState(true);
  const [isDarkClicked, setIsDarkClicked ] = useState(false);

  const [isEngClicked, setIsEngClicked ] = useState(true);
  const [isCnClicked, setIsCnClicked ] = useState(false);
  const [lang, setLang] = useState('english');
  const [ukFlag, setUkFlag] = useState(ukFlagDark);
  const [cnFlag, setCnFlag] = useState(cnFlagLight);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAboutMe(lang);
      dispatch(actions.setAbout(res));

      const edRes = await getEducation(lang);
      dispatch(actions.setEducation(edRes));

      const skillsRes = await getSkills(lang);
      dispatch(actions.setSkills(skillsRes));

      const legendRes = await getLegend(lang);
      dispatch(actions.setLegend(legendRes));

      const buttonRes = await getButtonDetails(lang);
      dispatch(actions.setButtons(buttonRes));
    }
    fetchData();
  }, [lang])

  function handleLightClick() {
    setTheme(true);
    setIsDarkClicked(false);
    setIsLightClicked(true);
    // setIsDiscoClicked(false);
    // clearInterval()
  }

  function handleDarkClick() {
    setTheme(false);
    setIsDarkClicked(true);
    setIsLightClicked(false);
    // setIsDiscoClicked(false);
    // clearInterval()
  }

  function handleEngClick() {
    setLang('english');
    setIsCnClicked(false);
    setIsEngClicked(true);
    setUkFlag(ukFlagDark);
    setCnFlag(cnFlagLight);
  }

  function handleCnClick() {
    setLang('chinese');
    setIsCnClicked(true);
    setIsEngClicked(false);
    setUkFlag(ukFlagLight);
    setCnFlag(cnFlagDark);
  }

  function setBody(type) {
    switch (type) {
      case 'about':
        return <AboutBody isLightTheme={isLightTheme} aboutTitle={state.about.body.title} aboutContent={state.about.body.content}></AboutBody>
      case 'education':
        return <EducationBody isLightTheme={isLightTheme} content={state.education.body}></EducationBody>
      case 'skills':
        return <SkillsBody></SkillsBody>
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
    <Wrapper>
      <ButtonColumn >
        <Button 
          type='small'
          clicked={isLightClicked} 
          onClick={() => handleLightClick()}>
            {state.buttons.lightTitle}
        </Button>
        <Button 
          type='small' 
          clicked={isDarkClicked} 
          onClick={() => handleDarkClick()}>
            {state.buttons.darkTitle}
        </Button>
      </ButtonColumn>
      <ButtonColumn right>
        <LangButton 
            clicked={isEngClicked} 
            onClick={() => handleEngClick()}>
              <img style={{boxSizing: 'border-box', width: '100%', height: '100%'}} src={ukFlag}></img>
          </LangButton>
          <LangButton 
            clicked={isCnClicked} 
            onClick={() => handleCnClick()}>
              <img style={{boxSizing: 'border-box', width: '100%', height: '100%'}} src={cnFlag}></img>
          </LangButton>
      </ButtonColumn>
      <NavBar></NavBar>
      <Body mode='light'>{setBody(state.tabOpen)}
      </Body>
    </Wrapper>
    </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext, App };
