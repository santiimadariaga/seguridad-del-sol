import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: "Montserrat", sans-serif;
        color: black;
    }
    html {
        scroll-behavior: smooth;
        scroll-padding-top: 95px;
    }
    body {
        width: 100%;
        position: relative;
    }
    textarea {
        resize: none;
    }
`;

export default GlobalStyle;
