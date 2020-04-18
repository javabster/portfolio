import styled from 'styled-components';

export default styled.div`
    position: relative;
    background: ${props => props.theme.bubble};
    width: 40px;
    height: 25px;
    line-height: 25px;
    /* margin: 10px; */
    margin-left: ${props => `${props.score}0%`};
    color: white;
    text-align: center;

&:after {
    content:'';
    display: block;
    position: absolute;

    width:0;
    height:0;
    border-right:15px solid transparent;
    border-left: 0.5px solid ${props => props.theme.bubble};
    border-top: 15px solid ${props => props.theme.bubble};
    bottom:-15px;
}

/* &:after {
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
} */
`