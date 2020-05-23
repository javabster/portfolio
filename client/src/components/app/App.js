import React, { useEffect, createContext, useReducer } from 'react';
import Wrapper from './Wrapper';
import NavBar from '../nav-bar/NavBar';
import ThemeButtons from '../nav-bar/ThemeButtons';
import LanguageButtons from '../nav-bar/LanguageButtons';

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

const AppContext = createContext(null)

function App() {
  const [state, dispatch ] = useReducer(applicationReducer, defaultState)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAboutMe(state.language);
      dispatch(actions.setAbout(res));

      const edRes = await getEducation(state.language);
      dispatch(actions.setEducation(edRes));

      const skillsRes = await getSkills(state.language);
      dispatch(actions.setSkills(skillsRes));

      const legendRes = await getLegend(state.language);
      dispatch(actions.setLegend(legendRes));

      const buttonRes = await getButtonDetails(state.language);
      dispatch(actions.setButtons(buttonRes));
    }
    fetchData();
  }, [state.language])

  function setBody(type) {
    switch (type) {
      case 'about':
        return <AboutBody 
                isLightTheme={state.mode === 'light'} 
                aboutTitle={state.about.body.title} 
                aboutContent={state.about.body.content}>
              </AboutBody>
      case 'education':
        return <EducationBody 
                isLightTheme={state.mode === 'light'} 
                content={state.education.body}>
              </EducationBody>
      case 'skills':
        return <SkillsBody></SkillsBody>
      default:
        return <AboutBody 
                isLightTheme={state.mode === 'light'} 
                aboutTitle={state.about.body.title} 
                aboutContent={state.about.body.content}>
              </AboutBody>
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <ThemeProvider theme={state.mode === 'light' ? lightTheme : darkTheme}>
    <Wrapper>
      <ThemeButtons></ThemeButtons>
      <LanguageButtons></LanguageButtons>
      <NavBar></NavBar>
      <Body mode='light'>{setBody(state.tabOpen)}</Body>
    </Wrapper>
    </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext, App };
