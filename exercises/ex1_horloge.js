/////////////////////////////////////
// PUT THIS IN REACT APP INDEX.JS //
///////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * Displays current time
 */
function displayTime() {
    // Gets current date to obtain current time.
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    // Renders the root div from DOM to display time.
    ReactDOM.render(
        <p>Il est : {hour}:{min}:{sec}</p>,
        document.getElementById('root')
    );
}

// Calls displayTime() every second to update displayed time.
setInterval(displayTime, 1000);
