import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline: none;
        border: none;
        &::after{
            box-sizing: border-box;
        }
        &::before{
            box-sizing: border-box;
        }
    }
    html{
        font-family: 'Roboto', sans-serif;
        font-size: 62.5%;
    }
    body{
        background-color: rgb(243,242,239);
    }
    @media screen and (max-width: 1115px) {
        html{
            font-size: 60%;
        }
    }
    @media screen and (max-width: 723px) {
        html{
            font-size: 58%;
        }
    }
    @media screen and (max-width: 530px) {
        html{
            font-size: 56%;
        }
    }
        
    
`;
