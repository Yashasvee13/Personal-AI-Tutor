// src/components/AskQuestion.js
import React, { useState } from 'react';
import axios from 'axios';

function AskQuestion() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/api/ask', { question });
        setAnswer(response.data.answer);
        } catch (error) {
        console.error('Error asking question:', error);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            />
            <button type="submit">Ask</button>
        </form>
        <p>{answer}</p>
        </div>
    );
}

export default AskQuestion;
