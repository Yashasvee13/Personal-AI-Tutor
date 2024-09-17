// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        async function fetchProgress() {
        const response = await fetch('/api/progress');
        const data = await response.json();
        setProgress(data.progress);
        }
        fetchProgress();
    }, []);

    return (
        <div>
        <h2>Your Progress</h2>
        <ul>
            {progress.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    );
}

export default Dashboard;
