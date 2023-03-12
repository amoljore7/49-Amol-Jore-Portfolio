import React from 'react';
import ReactDOM from "react-dom";
import PWAPrompt from 'react-ios-pwa-prompt';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <PWAPrompt
    promptOnVisit={1}
    timesToShow={3}
    copyClosePrompt="Close"
    permanentlyHideOnDismiss={false}
  />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
