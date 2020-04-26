import styled from 'styled-components';

export default styled.div`
    position: relative;
    background: ${props => props.theme.bubble};
    min-width: 40px;
    display: inline-block;
    max-height: 25px;
    line-height: 25px;
    padding: 2px 10px 2px 10px;
    margin-left: ${props => `${props.score}0%`};
    color: white;
    text-align: center;
    white-space: nowrap;

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
    left: 0px;
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