import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { App } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App />
        <FirstApp title={'goku'}/> */}
        <CounterApp value={123}/>
    </React.StrictMode>
)
