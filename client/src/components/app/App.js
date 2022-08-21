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
import BlogsBody from '../body/BlogsBody';
import TalksBody from '../body/TalksBody';

import applicationReducer, { defaultState } from '../../reducers/applicationReducer';
import * as actions from '../../actions/applicationActions';

import { getAboutMe, getSkills, getLegend, getButtonDetails, getData } from '../../utils/backendApi';

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

      const skillsRes = await getSkills(state.language);
      dispatch(actions.setSkills(skillsRes));

      const legendRes = await getLegend(state.language);
      dispatch(actions.setLegend(legendRes));

      const buttonRes = await getButtonDetails(state.language);
      dispatch(actions.setButtons(buttonRes));

      const talksRes = await getData('talks');
      dispatch(actions.setTalks(talksRes));

      const blogsRes = await getData('blogs');
      dispatch(actions.setBlogs(blogsRes));
    }
    fetchData();
    const mobile = isMobileDevice();
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
      case 'talks':
        return <TalksBody/>
      case 'blogs':
        return <BlogsBody />
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
        <div style={{gridRowStart: '1', gridColumnStart: '2'}}>
          <NavBar></NavBar>
          {setBody(state.tabOpen)}
          <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
            <ThemeButtons></ThemeButtons>
            <Feedback></Feedback>
            <LanguageButtons></LanguageButtons>
          </div>
          
        </div>
      </Wrapper>
    : 
      <MobileWrapper>
        <div>
          <NavBar></NavBar>
          <Body mode='light'>{setBody(state.tabOpen)}</Body>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'center'}}>
            <ThemeButtons ></ThemeButtons>
            <LanguageButtons ></LanguageButtons>
          </div>
          <Feedback></Feedback>
        </div>
      </MobileWrapper>
    }
    </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext, App };
