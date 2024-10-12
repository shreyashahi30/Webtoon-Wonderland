// src/utils/api.js

// Base URL for the API
const API_URL = process.env.REACT_APP_API_URL; // Make sure to set this in your .env file

// Function to fetch webtoon data
export const fetchWebtoons = async () => {
    try {
        const response = await fetch(`${API_URL}/webtoons`);
        if (!response.ok) {
            throw new Error('Failed to fetch webtoons');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching webtoons:', error);
        return [];
    }
};

// Function to submit a vote for the favorite version
export const submitVote = async (version) => {
    try {
        const response = await fetch(`${API_URL}/vote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ version }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit vote');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting vote:', error);
    }
};

