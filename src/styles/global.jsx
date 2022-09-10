import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};

* {
    font-family: 'SpoqaHanSansNeo-M';
  padding: 0;
  margin: 0;
  box-sizing: border-box;
};

html {
  font-size: 62.5%;
};

body {
    font-size: 1.6rem;
    line-height: 1.25;
    font-family: 'SpoqaHanSansNeo-M';
    background-color: white;
};

button {
  background-color: inherit;
  border: none;
};

input {
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
