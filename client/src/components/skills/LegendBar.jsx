import styled from 'styled-components';

export default styled.div`
    height: 30px;
    width: 500px;
    background-color: ${props => props.theme.bar};
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;

`