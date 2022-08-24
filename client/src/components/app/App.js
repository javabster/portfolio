import React, { useEffect, createContext, useReducer, useState } from 'react';
import Wrapper from './Wrapper';
import MobileWrapper from './MobileWrapper';
import NavBar from '../nav-bar/NavBar';
import ThemeButtons from '../nav-bar/ThemeButtons';

import Body from '../body/Body';
import AboutBody from '../body/AboutBody'
import BlogsBody from '../body/BlogsBody';
import TalksBody from '../body/TalksBody';

import applicationReducer, { defaultState } from '../../reducers/applicationReducer';
import * as actions from '../../actions/applicationActions';

import { getButtonDetails, getData } from '../../utils/backendApi';

import '../../fonts/Aldrich/Aldrich-Regular.ttf'
import './App.css';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import { isMobileDevice } from '../../utils/utils';

const AppContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(applicationReducer, defaultState);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const aboutRes = await getData('about');
      dispatch(actions.setAbout(aboutRes));

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
        return <AboutBody />
      case 'talks':
        return <TalksBody />
      case 'blogs':
        return <BlogsBody />
      default:
        return <AboutBody />
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.mode === 'light' ? lightTheme : darkTheme}>
        {!isMobile
          ?
          <Wrapper>
            <div>
              <NavBar></NavBar>
              {setBody(state.tabOpen)}
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                <ThemeButtons></ThemeButtons>
              </div>
            </div>
          </Wrapper>
          :
          <MobileWrapper>
            <div>
              <NavBar></NavBar>
              <Body mode='light'>{setBody(state.tabOpen)}</Body>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'center' }}>
                <ThemeButtons ></ThemeButtons>
              </div>
            </div>
          </MobileWrapper>
        }
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext, App };
