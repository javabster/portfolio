import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    margin-top: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-template-rows: 20% auto 20%;
    width: 100vw;
    box-sizing: border-box;
`;