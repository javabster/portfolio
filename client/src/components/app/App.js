import React, { useEffect, createContext, useReducer, useState } from 'react';
import Wrapper from './Wrapper';
import MobileWrapper from './MobileWrapper';
import NavBar from '../nav-bar/NavBar';
import ThemeButtons from '../nav-bar/ThemeButtons';
import LanguageButtons from '../nav-bar/LanguageButtons';
import Feedback from '../feedback/Feedback';

import Body from '../body/Body';
import SkillsBody from '../body/SkillsBody';
import AboutBody from '../body/AboutBody'
import EducationBody from '../body/EducationBody';
import WorkExpBody from '../body/WorkExpBody';

import applicationReducer, { defaultState } from '../../reducers/applicationReducer';
import * as actions from '../../actions/applicationActions';

import { getAboutMe, getSkills, getEducation, getLegend, getButtonDetails, getWork } from '../../utils/backendApi';

import '../../fonts/Aldrich/Aldrich-Regular.ttf'
import './App.css';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import { isMobileDevice } from '../../utils/utils';

const AppContext = createContext(null)

function App() {
  const [state, dispatch ] = useReducer(applicationReducer, defaultState);
  const [ isMobile, setIsMobile ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAboutMe(state.language);
      dispatch(actions.setAbout(res));

      const workRes = await getWork(state.language);
      console.log(workRes);
      dispatch(actions.setWork(workRes));

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
    const mobile = isMobileDevice();
    console.log(mobile)
    setIsMobile(mobile);
  }, [state.language])

  function setBody(type) {
    switch (type) {
      case 'about':
        return <AboutBody 
                isLightTheme={state.mode === 'light'} 
                aboutTitle={state.about.body.title} 
                aboutContent={state.about.body.content}>
              </AboutBody>
      case 'work_exp':
      return <WorkExpBody 
              isLightTheme={state.mode === 'light'} 
              content={state.workExp.body}>
            </WorkExpBody>
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
    {!isMobile
     ?
      <Wrapper>
        <ThemeButtons></ThemeButtons>
        <LanguageButtons></LanguageButtons>
        <div syle={{display: 'flex', flexDirection: 'column'}}>
          <NavBar></NavBar>
          <Body mode='light'>{setBody(state.tabOpen)}</Body>
          <Feedback></Feedback>
        </div>
      </Wrapper>
    : 
      <MobileWrapper>
        <div syle={{display: 'flex', flexDirection: 'row'}}>
          <NavBar></NavBar>
          <Body mode='light'>{setBody(state.tabOpen)}</Body>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
            <ThemeButtons ></ThemeButtons>
            <Feedback></Feedback>
            <LanguageButtons ></LanguageButtons>
          </div>
        </div>
      </MobileWrapper>
    }
    </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext, App };
