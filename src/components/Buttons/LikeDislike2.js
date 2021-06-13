import React, { useState } from "react";

import "./LikeDislike2.css";

const LikeDislike2 = (props) => {
  const [status] = useState(null);

  const handleClickLike = () => {
    props.updateMemeVotes(props.id, "upvote");
  };

  const handleClickDislike = () => {
    props.updateMemeVotes(props.id, "downvote");
  };

  return (
    <div className="container">
      <button
        className={status === "like" ? "btnlike active" : "btnlike"}
        onClick={handleClickLike}
      >
        Like
        <span>{props.upvotes}</span>
      </button>

      <button
        className={status === "dislike" ? "btnlike active" : "btndislike"}
        onClick={handleClickDislike}
      >
        Dislike
        <span>{props.downvotes}</span>
      </button>
    </div>
  );
};

export default LikeDislike2;
