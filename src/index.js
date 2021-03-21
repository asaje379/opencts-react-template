import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './vendor/Globals/ThemeProvider';
import LanguageProvider from './vendor/Globals/LanguageProvider';
import DialogsProvider from './vendor/Globals/DialogsProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <DialogsProvider>
          <App />
        </DialogsProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
