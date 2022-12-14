import styled, {keyframes} from 'styled-components'
import {setDelay} from '../common/helper.js'


export const ArrayHolder = styled.div`
  display: flex;
  height: 175px;
  align-items: center;
  padding: 15px;
  overflow: auto;
`;

export const ArrayItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex-shrink: 0;
`;

export const rightToLeftAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  60% {
    transform: translate(0px, 50px);
    background-color: ${swapColor};
  }
  80% {
    transform: translate(-${distance * 50}px, 50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(-${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(-${distance * 50}px, 0px);
    background-color: none;
  }
`;

export const leftToRightAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  60% {
    transform: translate(0px, -50px);
    background-color: ${swapColor};
  }
  80% {
    transform: translate(${distance * 50}px, -50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(${distance * 50}px, 0px);
    background-color: none;
  }
`;


const StyledButton = styled.button`
    position:relative;
    width: 100px;
    top: 200px;

    font-size: 16px;
    transition: 0.5s;
    background-color: ${(props) => 
        props.varient === 'outline' ? 'blue' : 'green'
    };
    animation: ${(props) =>  props.varient === 'outline' ? rightToLeftAnimation(props.distance) : leftToRightAnimation(props.distance)} ${() => 3}s forwards;
`


const myArr = [1,2,3,4,5]


export default function ListStyledButton() {



  return (<>
    
      {myArr}

  </>
  )
  

}