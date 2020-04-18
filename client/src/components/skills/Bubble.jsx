import styled from 'styled-components';

export default styled.div`
    position: relative;
    background: ${props => props.theme.bubble};
    width: 50px;
    height: 25px;
    margin: 10px;
    margin-left:232px;

&:after {
    content:'';
    display: block;
    position: absolute;

    width:0;
    height:0;
    border-right:8px solid transparent;
    border-left: 8px solid transparent;
    border-top: 15px solid ${props => props.theme.bubble};
    bottom:-15px;
    left: 10px;
}
`