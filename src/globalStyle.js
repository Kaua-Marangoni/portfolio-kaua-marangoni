import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Noto Sans', sans-serif;

        ::-webkit-scrollbar {
            width: 12px;
        }
        ::-webkit-scrollbar-track {
            background: #3b3b3b;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #434dcd;
            border-radius: 20px;
            border: 3px solid #ffffff99;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #333dc1;
        }
        ::-webkit-scrollbar-thumb:active {
            background-color: #2531bf;
        }
    }
`
