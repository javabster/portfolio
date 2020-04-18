import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import Button from '../shared/Button';
import ButtonTest from '../shared/ButtonTest';
import ButtonRow from '../nav-bar/ButtonRow';
import ButtonColumn from '../nav-bar/ButtonColumn';
import Body from '../body/Body';
import SkillsBody from '../body/SkillsBody';

import { getAboutMe, getSkills } from '../../utils/backendApi';

import '../../fonts/Aldrich/Aldrich-Regular.ttf'
import './App.css';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import { clearInterval } from 'timers';


function App() {
  const [isLightTheme, setTheme] = useState(true);
  const [isLightClicked, setIsLightClicked ] = useState(true);
  const [isDarkClicked, setIsDarkClicked ] = useState(false);
  const [isDiscoClicked, setIsDiscoClicked ] = useState(false);

  const [about, setAbout] = useState({title: '', body: ''})
  const [isAboutClicked, setIsAboutClicked ] = useState(true)
  const [isEdClicked, setIsEdClicked ] = useState(false)
  const [isSkillsClicked, setIsSkillsClicked ] = useState(false)

  const [bodyType, setBodyType ] = useState('about')
  const [bodyContent, setBodyContent] = useState(about.body)
  const [skills, setSkills ] = useState({0:{}, 1:{}});
  let disco;


  useEffect(() => {
    const fetchData = async () => {
      const res = await getAboutMe();
      setAbout(res)
      setBodyContent(res.body)
      const skillsRes = await getSkills();
      setSkills(skillsRes)
    }
    fetchData();
  }, [])

  function handleEdClick() {
    setIsAboutClicked(false)
    setIsEdClicked(true)
    setIsSkillsClicked(false)
    setBodyType('education')
    setBodyContent('education stuff')
  }

  function handleAboutClick() {
    setIsAboutClicked(true)
    setIsEdClicked(false)
    setIsSkillsClicked(false)
    setBodyType('about')
    setBodyContent(about.body)
  }

  function handleSkillsClick() {
    setIsSkillsClicked(true)
    setIsAboutClicked(false)
    setIsEdClicked(false)
    setBodyType('skills')
    // setBodyContent(about.body)
  }

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

  function setBody(type) {
    switch (type) {
      case 'about':
        return <div>{bodyContent}</div>
      case 'education':
        return <div>{bodyContent}</div>
      case 'skills':
      console.log(skills);
        return <SkillsBody skills={skills}></SkillsBody>
    }
  }

  // function handleDiscoClick() {
  //   setIsDiscoClicked(true)
  //   setIsDarkClicked(false);
  //   setIsLightClicked(false);
  //   // setInterval(switchTheme, 700);
  //   console.log('HERE 1')
  // }

  // function switchTheme() {
  //       if (isLightTheme) setTheme(false)
  //       else setTheme(true)
  //       console.log('HERE')
  // }

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
    <Wrapper>
      <ButtonColumn>
        <Button 
          type='small'
          clicked={isLightClicked} 
          onClick={() => handleLightClick()}>
            Light Mode
        </Button>
        <Button 
          type='small' 
          clicked={isDarkClicked} 
          onClick={() => handleDarkClick()}>
            Dark Mode
        </Button>
        {/* <Button 
          type='small' 
          clicked={isDiscoClicked} 
          onClick={() => handleDiscoClick()}>
            Disco Mode
        </Button> */}
      </ButtonColumn>
      <ButtonRow>
        <Button 
          type='nav-bar' 
          clicked={isAboutClicked} 
          onClick={() => handleAboutClick()}>
            {about.title}
        </Button>
        <Button 
          type='nav-bar' 
          clicked={isEdClicked} 
          onClick={() => handleEdClick()}>
            Education
        </Button>
        <Button 
          type='nav-bar' 
          clicked={isSkillsClicked} 
          onClick={() => handleSkillsClick()}>
            Skills
        </Button>
      </ButtonRow>
      <Body mode='light'>{setBody(bodyType)}
      </Body>
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
