import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import App from './components/App';

ReactDOM.render((
    <MuiThemeProvider >
        <div>
            <AppBar  title="Fetch Games Details" showMenuIconButton={false}  style={{backgroundColor: "black"}} />
            <App />
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));

