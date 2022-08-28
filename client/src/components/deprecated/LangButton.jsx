import styled from 'styled-components';

export default styled.button`
    background-color: ${props => {
    if (props.clicked === false) return '#FF2E33';
    else if (props.clicked === true) return '#45050C';
  }
  };

    /* background-image: url("../../images/uk-light.png"); */
    /* box-sizing: border-box; */
    margin: 10px;
    /* margin-left: 80px; */
    min-height:30px;
    height: 10px;
    min-width: 20px;
    width: 60px;
    padding: 0px;
    border: none;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    color: ${props => {
    if (props.clicked === false) return props.theme.accent;
    else if (props.clicked === true) return props.theme.background;
  }
  };

    /* font-weight: bold; */

    box-shadow: ${props => {
    if (props.clicked === false) return `5px 5px 0px ${props.theme.accent};`
    else if (props.clicked === true) return `3px 3px 0px ${props.theme.btnMain}`;
  }
  };
    /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */

    transform: ${props => {
    if (props.clicked === false) return 'translate(0em,-0.2em)';
  }
  };

    &:focus {
    outline: none;
    }
`