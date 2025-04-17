import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [clicked, setClick] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClick(clicked+1);
    };

    return (
        <div>
            <p>No. of Click = {clicked}</p>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}
