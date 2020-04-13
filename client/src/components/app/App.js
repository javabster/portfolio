import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import Button from '../shared/Button';
import ButtonTest from '../shared/ButtonTest';
import ButtonRow from '../nav-bar/ButtonRow';
import Body from '../body/Body';

import { getAboutMe } from '../../utils/backendApi';

import '../../fonts/Aldrich/Aldrich-Regular.ttf'
import './App.css';
import { ThemeProvider } from 'styled-components';


function App() {
  const [about, setAbout] = useState({title: '', body: ''})
  const [isAboutClicked, setIsAboutClicked ] = useState(true)
  const [isEdClicked, setIsEdClicked ] = useState(false)
  const [isWorkClicked, setIsWorkClicked ] = useState(false)
  const [bodyContent, setBodyContent] = useState(about.body)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAboutMe();
      console.log('HERE')
      console.log(res);
      setAbout(res)
      setBodyContent(res.body)
      console.log(bodyContent)
    }
    fetchData();
    // console.log(title);
  }, [])

  const theme = {
    background: '#DFE4FB'
  }

  function handleEdClick() {
    setIsAboutClicked(false)
    setIsEdClicked(true)
    setBodyContent('education stuff')
  }

  function handleAboutClick() {
    setIsAboutClicked(true)
    setIsEdClicked(false)
    setBodyContent(about.body)
    console.log(bodyContent)
  }

  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      <ButtonRow>
        <Button mode='light' clicked={isAboutClicked} onClick={() => handleAboutClick()}>{about.title}</Button>
        <Button mode='light' clicked={isEdClicked} onClick={() => handleEdClick()}>Education</Button>
      </ButtonRow>
      <Body mode='light'>{bodyContent}</Body>
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
