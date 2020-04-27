import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import Button from '../shared/Button';
import LangButton from '../shared/LangButton';
import ButtonTest from '../shared/ButtonTest';
import ButtonRow from '../nav-bar/ButtonRow';
import ButtonColumn from '../nav-bar/ButtonColumn';
import Body from '../body/Body';
import SkillsBody from '../body/SkillsBody';

import { getAboutMe, getSkills, getTitles, getEducation } from '../../utils/backendApi';

import '../../fonts/Aldrich/Aldrich-Regular.ttf'
import './App.css';
import { lightTheme, darkTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import { clearInterval } from 'timers';
import ukFlagLight from '../../images/uk-light.svg'
import ukFlagDark from '../../images/uk-dark.svg'
import cnFlagLight from '../../images/cn-light.png'
import cnFlagDark from '../../images/cn-dark.svg'

function App() {
  const [isLightTheme, setTheme] = useState(true);
  const [isLightClicked, setIsLightClicked ] = useState(true);
  const [isDarkClicked, setIsDarkClicked ] = useState(false);
  const [isDiscoClicked, setIsDiscoClicked ] = useState(false);

  const [isEngClicked, setIsEngClicked ] = useState(true);
  const [isCnClicked, setIsCnClicked ] = useState(false);
  const [lang, setLang] = useState('english');
  const [ukFlag, setUkFlag] = useState(ukFlagDark);
  const [cnFlag, setCnFlag] = useState(cnFlagLight);

  const [about, setAbout] = useState({title: '', body: ''});
  const [ed, setEd] = useState({title: '', body: ''});
  const [isAboutClicked, setIsAboutClicked ] = useState(true);
  const [isEdClicked, setIsEdClicked ] = useState(false);
  const [isSkillsClicked, setIsSkillsClicked ] = useState(false);

  const [bodyType, setBodyType ] = useState('about');
  const [bodyContent, setBodyContent] = useState(about.body);
  const [skills, setSkills ] = useState({0:{}, 1:{}});
  let disco;

  const [titles, setTitles] = useState({
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    skillLegend: 'legend (hover for details）'
  })


  useEffect(() => {
    const fetchData = async () => {
      const res = await getAboutMe(lang);
      setAbout(res);
      setBodyContent(res.body);
      const edRes = await getEducation(lang);
      setEd(edRes);
      const skillsRes = await getSkills();
      setSkills(skillsRes);
      const titlesRes = await getTitles(lang);
      setTitles(titlesRes);
    }
    fetchData();
  }, [lang])

  function handleEdClick() {
    setIsAboutClicked(false)
    setIsEdClicked(true)
    setIsSkillsClicked(false)
    setBodyType('education')
    setBodyContent(ed.body)
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
        return <div>{bodyContent}</div>
      case 'education':
        return <div>{bodyContent}</div>
      case 'skills':
        return <SkillsBody titles={titles} skills={skills}></SkillsBody>
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
      <ButtonColumn >
        <Button 
          type='small'
          clicked={isLightClicked} 
          onClick={() => handleLightClick()}>
            {titles.lightMode}
        </Button>
        <Button 
          type='small' 
          clicked={isDarkClicked} 
          onClick={() => handleDarkClick()}>
            {titles.darkMode}
        </Button>
        {/* <Button 
          type='small' 
          clicked={isDiscoClicked} 
          onClick={() => handleDiscoClick()}>
            Disco Mode
        </Button> */}
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
            {ed.title}
        </Button>
        <Button 
          type='nav-bar' 
          clicked={isSkillsClicked} 
          onClick={() => handleSkillsClick()}>
            {titles.skills}
        </Button>
      </ButtonRow>
      <Body mode='light'>{setBody(bodyType)}
      </Body>
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
