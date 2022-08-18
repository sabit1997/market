import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'OSeongandHanEum-B';
  src: url('../assetsfont/OSeongandHanEum-Bold.ttf');
}

@font-face {
  font-family: 'OSeongandHanEum-R';
  src: url('../assetsfont/OSeongandHanEum-Regular.ttf');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    line-height: 1.25;
    font-family: 'OSeongandHanEum-R';
    background-color: white;
}

button {
  background-color: inherit;
  border: none;
}

input:hover, input:focus {
  border: none;
}

.ir {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
}

`;

export default GlobalStyle;
