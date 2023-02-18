import React, { useEffect, createContext, useReducer, useState } from 'react';
import Wrapper from './Wrapper';
import NavBar from '../nav-bar/NavBar';
import ThemeButtons from '../nav-bar/ThemeButtons';

import AboutBody from '../body/AboutBody'
import BlogsBody from '../body/BlogsBody';
import TalksBody from '../body/TalksBody';
import YTBody from '../body/YTBody';

import applicationReducer, { defaultState } from '../../reducers/applicationReducer';
import * as actions from '../../actions/applicationActions';

import { getData } from '../../utils/backendApi';

import './App.css';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import { isMobileDevice } from '../../utils/utils';

const AppContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(applicationReducer, defaultState);

  useEffect(() => {
    const fetchData = async () => {
      const aboutRes = await getData('about');
      dispatch(actions.setAbout(aboutRes));

      const talksRes = await getData('talks');
      dispatch(actions.setTalks(talksRes));

      const blogsRes = await getData('blogs');
      dispatch(actions.setBlogs(blogsRes));

      const videosRes = await getData('videos');
      dispatch(actions.setVideos(videosRes));
    }
    fetchData();
    const mobile = isMobileDevice();
    dispatch(actions.setMobile(mobile));
  }, [])

  function setBody(type) {
    switch (type) {
      case 'about':
        return <AboutBody />
      case 'talks':
        return <TalksBody />
      case 'blogs':
        return <BlogsBody />
      case 'videos':
        return <YTBody category="video" />
      case 'livestreams':
        return <YTBody category="livestream" />
      default:
        return <AboutBody />
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.mode === 'light' ? lightTheme : darkTheme}>
        <Wrapper>
          <div>
            <NavBar></NavBar>
            {setBody(state.tabOpen)}
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'center' }}>
              <ThemeButtons></ThemeButtons>
            </div>
          </div>
        </Wrapper>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext, App };
