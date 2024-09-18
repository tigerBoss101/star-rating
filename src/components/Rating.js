import "./Rating.css";

import Star from "./Star";

export default function Rating() {
    return (
        <div id="rating">
            <h1>How many stars would you give to our<br />Online Code Editor?</h1>
            <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p>Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.</p>
        </div>
    )
}