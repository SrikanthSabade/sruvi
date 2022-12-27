import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import rootReducer from './Components/Actions/Reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import './Fonts/Magilio/Magilio.ttf'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8CC43C",
      },
      secondary: {
        main: "#192935",
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>

    
  <Router>
  <App />
  </Router>
   
  </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
