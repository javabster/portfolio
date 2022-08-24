import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    margin-top: 0;
    padding: 20px;
    width: 100vw;
    box-sizing: border-box;
`;