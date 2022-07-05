import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/js/headerComponent';
import Main from './components/js/mainComponent';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header></Header>
        <Main></Main>
    </React.StrictMode>
);