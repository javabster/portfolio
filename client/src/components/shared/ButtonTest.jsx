import styled from 'styled-components';

export default styled.button`
    background-color: ${props => {
        if (props.mode == 'light') return '#8093F1'}
    };
    /* margin: 10px; */
    /* min-height:50px;
    min-width:100px; */

  color: grey;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 0.075em;
  padding: .8em 1em;
  margin: auto 2em;
  position: relative;
  align-self: center;
  text-transform: uppercase;
  border: 3px red solid;
  border-image: linear-gradient(45deg, blue 0%, pink 100%);
  border-image-slice: 1 1 0 0;
  z-index: 1;
  box-shadow: -0.5em .5em transparentize(grey,1);
  transform-origin: left bottom;
  @include transition-all;
  
  &:before,
  &:after {
    border: 3px blue solid;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
  }
  
  // SIDE
  &:before {
    border-image: linear-gradient(45deg, blue 0%, adjust-hue(blue,10%) 100%);
    border-image-slice: 1 1 0 1;
    left: -0.59em; top: .15em;
    width: .31em;
    height: 100%;
    transform: skewY(-45deg);
  }
  
  // BOTTOM
  &:after {
    border-image: linear-gradient(45deg, blue 0%, pink 100%);
    border-image-slice: 1 1 1 0;
    bottom: -0.61em; right: 0.16em;
    width: 100%;
    height: .31em;
    transform: skewX(-45deg);
  }
  
  // Shadow
  &:hover {
    //border-image-slice: 1;
    background-color: white;
    background-size: 90%;
    transform: translate(0.5em,-0.5em);
    box-shadow: -1em 1em .15em transparentize(grey,.9);
    // box-shadow: -1em 1em 1em transparentize(blue,.9), -1em 1.9em 1.9em transparentize(grey,.9), 0em .38em .38em transparentize(grey,.9), 0em .76em .76em transparentize(grey,.9), 0em 1.52em 1.52em transparentize(grey,.9);
    
    
    &:before {
      @include background-image(linear-gradient(45deg, blue 0%, adjust-hue(blue,10%) 100%));
      height: calc(100% - .13em);
      border-image-slice: 1;
    }
    
    &:after {
      @include background-image(linear-gradient(45deg, blue 0%, pink 100%));
      width: calc(100% - .13em);
      border-image-slice: 1;
    }
  }

    
    
`