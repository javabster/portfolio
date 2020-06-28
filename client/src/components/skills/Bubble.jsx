import styled from 'styled-components';

export default styled.div`
    position: relative;
    background: ${props => props.theme.bubble};
    min-width: 40px;
    max-width: 100px;
    display: inline-block;
    /* max-height: 25px; */
    /* line-height:10px; */
    /* vertical-align: middle; */
    padding: 10px 10px 2px 10px;
    margin-left: ${props => `${props.score}0%`};
    color: white;
    text-align: center;
    white-space: pre-wrap;
    height: ${props => props.type === 'legend' ? '42px' : '20px'};
    font-size: ${props => props.fontSize};

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