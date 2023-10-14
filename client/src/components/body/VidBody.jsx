import styled from 'styled-components';

export default styled.div`
    width: 100%; 
    height: 100%;
    position: relative; 
    padding-bottom: 56.25%;
    box-shadow: ${props => `5px 5px 0px ${props.theme.accent}`};
    background-color: ${props => props.theme.bodyMain};
    `