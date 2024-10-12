// src/components/Voting.js
import React, { useState } from 'react';

const Voting = () => {
    const [votes, setVotes] = useState({ manhwa: 0, anime: 0 });
    const [selected, setSelected] = useState('');

    const handleVote = (version) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [version]: prevVotes[version] + 1,
        }));
        setSelected(version);
    };

    return (
        <div className="voting-section">
            <h2>Which do you prefer?</h2>
            <div>
                <button onClick={() => handleVote('manhwa')}>Manhwa</button>
                <button onClick={() => handleVote('anime')}>Anime</button>
            </div>
            {selected && <p>You voted for: {selected}</p>}
            <h3>Current Votes:</h3>
            <p>Manhwa: {votes.manhwa}</p>
            <p>Anime: {votes.anime}</p>
        </div>
    );
};

export default Voting;

