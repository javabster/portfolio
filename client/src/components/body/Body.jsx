import styled from 'styled-components';

export default styled.div`
    min-height: 200px;
    height: 300px;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    padding: 20px;

    background-color: ${props => {
        if (props.mode === 'light') return '#FFFFFF';
      }
    };
    box-shadow: ${props => {
    if (props.mode === 'light') return '5px 5px 0px #45050C;';
        }
    };

`