import styled from 'styled-components';

export default styled.button`
    background-color: ${props => {
        if (props.clicked == false) return props.theme.btnMain;
        else if (props.clicked == true) return props.theme.accent;
      }
    };
    margin: 10px;
    min-height: ${props => {
        if (props.type === 'small') return '30px';
        else return '40px';
      }
    };
    
    height: ${props => {
        if (props.type === 'small') return '10px';
        else return '50px';
      }
    };
    min-width: ${props => {
        if (props.type === 'small') return '20px';
        else return '100px';
      }
    };
    padding: ${props => {
        if (props.type === 'small') return '0 0 0 0';
        else return '0 20px 0 20px';
      }
    };
    font-size: ${props => {
        if (props.type === 'small') return '0.70rem';
        else return '1rem';
      }
    };
    border: none;
    font-family: 'Aldrich';
    color: ${props => {
        if (props.clicked == false) return props.theme.accent;
        else if (props.clicked == true) return props.theme.background;
      }
    };
    text-align: center;

    /* font-weight: bold; */

    box-shadow: ${props => {
        if (props.clicked == false) return `5px 5px 0px ${props.theme.accent};`
        else if (props.clicked == true) return `3px 3px 0px ${props.theme.btnMain}`;
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

`