import React, { useState } from 'react';
import FeedbackSubmit from './FeedbackSubmit';

const FeedbackForm = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleSelect = (emoji) => {
        setIsSelected(true);
        setSelectedEmoji(emoji);
    }

    const handleReset = () => {
        setIsSelected(false);
        setSelectedEmoji(null);
    }

    const messageMap = {
        '😃': 'Glad, you had very good experience.',
        '🙂': 'Hope, next time you will have better experience!',
        '😐': 'Thank you for your feedback, we will try to improve...',
        '😞': 'Sorry for your bad experience!!'
    }

    return (
        isSelected ? (
            <div style={{ textAlign: 'center' }}>
                <FeedbackSubmit text={messageMap[selectedEmoji]} />
                <button onClick={handleReset} style={{ marginTop: '20px' }}>
                    Give Feedback Again
                </button>
            </div>
        ) : (
            <form className="feedback-form">
                <h2 style={{ textAlign: 'center' }}>Please Submit your Feedback Form</h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <button onClick={() => handleSelect('😃')} style={{ fontSize: '3rem', margin: '10px' }}>😀</button>
                    <button onClick={() => handleSelect('🙂')} style={{ fontSize: '3rem', margin: '10px' }}>🙂</button>
                    <button onClick={() => handleSelect('😐')} style={{ fontSize: '3rem', margin: '10px' }}>😐</button>
                    <button onClick={() => handleSelect('😞')} style={{ fontSize: '3rem', margin: '10px' }}>😔</button>
                </div>
            </form>
        )
    );
}
export default FeedbackForm;