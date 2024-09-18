import "./Star.css";

import starImg from "../assets/images/star.svg";
import blankImg from "../assets/images/blank_star.svg";

export default function Star({ active, onClick }) {
    return (
        <button onClick={onClick} class="star" >
            <img src={active ? starImg : blankImg} alt="Star" />
        </button>
    );
}