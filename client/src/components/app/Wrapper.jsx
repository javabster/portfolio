import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    margin-top: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: auto 50rem auto;
    grid-template-rows: 100px auto 100px;
    width: 100%;
`;