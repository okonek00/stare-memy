import React, { useState, useReducer} from 'react';

const initialState = {
  likes: 10,
  dislikes: 5
}

const appReducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_LIKE':
      return {
        ...state,
        likes: state.likes + action.payload
      }
    case 'HANDLE_DISLIKE':
      return {
        ...state,
        dislikes: state.dislikes + action.payload
      }
    default:
      return state
  }
}

const LikeDislike2 = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { likes, dislikes } = state
  const [status, setStatus] = useState(null)
  
  const handleClickLike = () => {
    if (status==='like') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_LIKE',
        payload: -1,
      })
    } else {
      setStatus('like')
      if (status==='dislike') {
        dispatch({
          type: 'HANDLE_DISLIKE',
          payload: -1,
        })
      }
      dispatch({
        type: 'HANDLE_LIKE',
        payload: 1,
      })
    }
  }
  
  const handleClickDislike = () => {
    if (status==='dislike') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_DISLIKE',
        payload: -1,
      })
    } else {
      setStatus('dislike')
      if (status==='like') {
        dispatch({
          type: 'HANDLE_LIKE',
          payload: -1,
        })
      }
      dispatch({
        type: 'HANDLE_DISLIKE',
        payload: 1,
      })
    }
  }
  
  return (
    <div className='container'>  
      <button className={status==='like'? 'btn active' : 'btn'} onClick={handleClickLike}> 
        Like 
        <span>{likes}</span>
      </button>
      
      <button className={status==='dislike'? 'btn active' : 'btn'} onClick={handleClickDislike}> 
        Dislike 
        <span>{dislikes}</span>
      </button>
    </div>
  )
  
}

export default LikeDislike2