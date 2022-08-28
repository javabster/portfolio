import styled from 'styled-components';

export default styled.button`
    width: 90%;
    min-height: 20px;
    height: fit-content;
    background-color: ${props => props.isClicked ? props.theme.accent : props.theme.background};
    box-shadow: ${props => props.isClicked ? `3px 3px 0px ${props.theme.timelineShadow}` : `5px 5px 0px ${props.theme.accent};`
  };

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-family: 'IBM Plex Sans';
    font-size: 1.15rem;
    color: ${props => props.isClicked ? props.theme.background : props.theme.accent};
    border: none;

     transform: ${props => {
    if (props.isClicked === false) return 'translate(0em,-0.2em)';
  }
  };

    &:focus {
    outline: none;
    }
`