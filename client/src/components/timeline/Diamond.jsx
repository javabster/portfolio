import styled from 'styled-components';

export default styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    width: 0;
    height: 0;
    margin: 5px;
    border: 12px solid transparent;
    border-bottom-color: ${props => props.isClicked ? props.theme.accent : props.theme.diamond};
    position: relative;
    top: ${props => props.isClicked ? '-10px': '-12px'};
    filter: ${props => props.isClicked ? `drop-shadow(3px 1px 0px ${props.theme.diamond})` : `drop-shadow(4px 1px 0px ${props.theme.accent})`};

    :after {
      content: '';
      position: absolute;
      left: -12px;
      top: 12px;
      width: 0;
      height: 0;
      border: 12px solid transparent;
      border-top-color: ${props => props.isClicked ? props.theme.accent : props.theme.diamond};
    }
`