import React, { useReducer } from "react";

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");
const initialState = {
  likes: 100,
  dislikes: 12,
  active: null
};

const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case HANDLE_LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === "dislike" ? dislikes - 1 : dislikes,
        active: "like"
      };
    case HANDLE_DISLIKE:
      return {
        ...state,
        likes: active === "like" ? likes - 1 : likes,
        active: "dislike",
        dislikes: dislikes + 1
      };
    default:
      return state;
  }
};

const LikeDislike = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { like=props.upvotes, dislikes=props.downvotes, active } = state;
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          color: active === "like" ? "green" : "black",
          marginRight: "10px"
        }}
        onClick={() =>
          active !== "like" ? dispatch({ type: HANDLE_LIKE }) : null
        }
      >
        <strong>Likes</strong>
        &nbsp;|&nbsp;
        {like}
      </button>
      <button
        style={{ color: active === "dislike" ? "red" : "black" }}
        onClick={() =>
          active !== "dislike" ? dispatch({ type: HANDLE_DISLIKE }) : null
        }
      >
        <strong>Dislikes</strong>
        &nbsp;|&nbsp;
        {dislikes}
      </button>
    </div>
  );
};

export default LikeDislike;