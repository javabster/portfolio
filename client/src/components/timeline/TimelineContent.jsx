import styled from 'styled-components';

export default styled.div`
    grid-column-start:3;
    height: fit-content;
    width: 88%;
    margin-top: 20px;
    padding: 10px;
    background-color: ${props => props.theme.background};

    /* to get \n to work */
    white-space: pre-wrap;
`