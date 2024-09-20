import "./Star.css";

import starImg from "../assets/images/star.svg";
import blankImg from "../assets/images/blank_star.svg";
import halfImg from "../assets/images/half_star.svg";

export default function Star({ idx, score, setScore }) {
    const onClick = event => {
        const bounds = event.target.getBoundingClientRect();
        const relX = event.clientX - bounds.x - bounds.width / 2;
        setScore(relX < 0 ? idx + 0.5 : idx + 1);
    }

    let image;
    if (score - idx === 0.5) {
        image = halfImg;
    }
    else if (score - idx >= 1) {
        image = starImg;
    }
    else {
        image = blankImg;
    }

    return (
        <button className="star" onClick={onClick} >
            <img src={image} alt="Star" />
        </button>
    );
}