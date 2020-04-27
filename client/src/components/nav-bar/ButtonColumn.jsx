import styled from 'styled-components';

export default styled.div`
    grid-column-start: ${props => props.right ? 3 : 1};
    grid-row-start: 1;
    display: flex;
    flex-direction: column;
    height: 50%;
    width:100px;
`