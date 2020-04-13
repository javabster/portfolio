import styled from 'styled-components';

export default styled.button`
    background-color: ${props => {
        if (props.mode == 'light' && props.clicked == false) return '#8093F1';
        else if (props.mode == 'light' && props.clicked == true) return '#45050C';
      }
    };
    margin: 10px;
    min-height:40px;
    height: 50px;
    min-width:100px;
    padding: 20px;
    border: none;
    font-size: 1em;
    font-family: 'Aldrich';
    color: ${props => {
        if (props.mode == 'light' && props.clicked == false) return '#45050C';
        else if (props.mode == 'light' && props.clicked == true) return '#DFE4FB';
      }
    };

    /* font-weight: bold; */

    box-shadow: ${props => {
        if (props.mode == 'light' && props.clicked == false) return '5px 5px 0px #45050C;';
        else if (props.mode == 'light' && props.clicked == true) return '3px 3px 0px #45050C;';
      }
    };
    /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */

    transform: ${props => {
        if (props.clicked == false) return 'translate(0em,-0.2em)';
      }
    };

    /* &:hover { */
    /* //border-image-slice: 1; */
    /* background-color: #DFE4FB; */
    /* background-size: 90%;
    transform: translate(0.5em,-0.5em);
    border: none; */

    @font-face {
    font-family: 'Aldrich';
    src: local('Aldrich'), url(../../fonts/Aldrich/Aldrich-Regular.ttf) format('truetype');
    }

    &:focus {
    outline: none;
    }

    /* &:active {
      background-color: #45050C;
    } */

`