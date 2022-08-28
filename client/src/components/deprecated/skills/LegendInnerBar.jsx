import styled from 'styled-components';

export default styled.div`
    height: 30px;
    grid-column-start: ${props => props.id};
    grid-column-end: ${props => props.id};
    background-color: ${props => props.barColour === 'fill' ?  props.theme.innerBar : 'transparent'};
`