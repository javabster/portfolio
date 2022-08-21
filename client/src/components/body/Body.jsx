import styled from 'styled-components';

export default styled.div`
    min-height: 100px;
    height: auto;
    padding: 25px;
    color: ${props => props.theme.color};
    padding-bottom: 50px;
    margin: 10px;
    background-color: ${props => props.theme.bodyMain
    };
    box-shadow: ${props => `5px 5px 0px ${props.theme.accent};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly`
    };

`