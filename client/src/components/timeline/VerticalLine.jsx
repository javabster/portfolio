import styled from 'styled-components';

export default styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    width: 7px;
    height: 100%;
    background: ${props => props.isClicked ? props.theme.accent : props.theme.diamond};
    margin-left: 15px;
`