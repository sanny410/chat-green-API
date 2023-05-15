import React from 'react';

import App from 'App';
import ReactDOM from 'react-dom/client';

import 'UI/Styles/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
