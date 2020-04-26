import styled from 'styled-components';

export default styled.div`
    min-height: 200px;
    height: auto;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    padding: 20px;
    color: ${props => props.theme.color};
    padding-bottom: 50px;

    background-color: ${props => props.theme.bodyMain
    };
    box-shadow: ${props => `5px 5px 0px ${props.theme.accent};`
    };

`