import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
import { SimpleForm } from './02-useEfect/SimpleForm';
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { HookApp } from './HooksApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
