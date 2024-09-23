import "./Star.css";
import { useEffect, useRef } from 'react';

import starImg from "../assets/images/star.svg";
import blankImg from "../assets/images/blank_star.svg";
import halfImg from "../assets/images/half_star.svg";

export default function Star({ idx, scoreState, setScoreState }) {
    const {score, hoverScore, hovering} = scoreState;
    const starRef = useRef(null);

    const onClick = event => {
        // const bounds = event.target.getBoundingClientRect();
        // const relX = event.clientX - bounds.x - bounds.width / 2;
        setScoreState(prev => {
                return {
                        ...prev,
                        score: hoverScore
                    }
        });
    }

    const onMouseEnter = () => {
        setScoreState(prev => {
            return {
                ...prev,
                hovering: true,
                hoverScore: idx + 1
            }
        });
    }

    const onMouseLeave = () => {
        setScoreState(prev => {
            return {
                ...prev,
                hovering: false
            }
        });
    }

    const onMouseOver = (event) => {
        console.log([event.clientX, event.clientY]);
    }

    useEffect(() => {
        starRef.current.addEventListener("mouseover", onMouseOver);
        const tempButton = starRef;

        return () => tempButton.current.removeEventListener("mouseover", onMouseOver);
    }, []);        

    let image;
    const currentScore = hovering ? hoverScore : score
    if (currentScore - idx === 0.5) {
        image = halfImg;
    }
    else if (currentScore - idx >= 1) {
        image = starImg;
    }
    else {
        image = blankImg;
    }

    return (
        <button className="star" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <img src={image} alt="Star" ref={starRef} />
        </button>
    );
}