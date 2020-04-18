import styled from 'styled-components';

export default styled.div`
    height: 30px;
    width: 500px;
    background-color: ${props => props.theme.bar};
    position: absolute;
    bottom: 0;

.inner-bar {
    height: 30px;
    width: ${props => `${props.score}0%`};
    background-color: ${props => props.theme.innerBar};
}

`