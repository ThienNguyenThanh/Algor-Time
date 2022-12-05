import styled, {keyframes} from 'styled-components'

const rightToLeftAnimation = keyframes`
0%{
    background-color: red;
  }
  40%{
    transform: translate(0px, 0px);
    background-color: red;
  }
  60% {
    transform: translate(0px, -50px);
    background-color: red;
  }
  80% {
    transform: translate(-${50}px, -50px);
    background-color: red;
  }
  99% {
    transform: translate(-${50}px, 0px);
    background-color: red;
  }
  100%{
    transform: translate(-${50}px, 0px);
  }
`;

const leftToRightAnimation = keyframes`
0%{
    background-color: red;
  }
  40%{
    transform: translate(0px, 0px);
    background-color:red;
  }
  60% {
    transform: translate(0px, -50px);
    background-color: red;
  }
  80% {
    transform: translate(${1 * 50}px, -50px);
    background-color: red;
  }
  99% {
    transform: translate(${1 * 50}px, 0px);
    background-color: red;
  }
  100%{
    transform: translate(${1 * 50}px, 0px);
    background-color: none;
  }
`;


const StyledButton = styled.button`
    position:relative;
    top: 200px;
    left: 500px;
    font-size: 16px;
    transition: 0.5s;
    background-color: ${(props) => 
        props.varient === 'outline' ? 'blue' : 'green'
    };
    animation: ${() => rightToLeftAnimation} ${() => 3}s forwards;
`





export default StyledButton
