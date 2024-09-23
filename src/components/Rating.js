import "./Rating.css";
import { useState } from 'react';

import Star from "./Star";

const messages = [
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform"
]

export default function Rating() {
    const [scoreState, setScoreState] = useState({
        score: 5,
        hoverScore: 5,
        hovering: false
    });
    const stars = Array(5).fill(null).map((_, idx) => {
        return (
            <Star
                key={idx}
                idx={idx}
                scoreState={scoreState}
                setScoreState={setScoreState}
            />
        )
    });

    return (
        <div id="rating">
            <h1>How many stars would you give to our<br />Online Code Editor?</h1>
            <div className="stars">
                {stars}
            </div>
            <p>{messages[Math.ceil(scoreState.score-1)]}</p>
        </div>
    )
}