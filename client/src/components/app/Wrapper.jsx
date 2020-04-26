import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    margin-top: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 10rem auto 10rem;
    grid-template-rows: 100px auto 100px;
    width: 100vw;
    box-sizing: border-box;
`;