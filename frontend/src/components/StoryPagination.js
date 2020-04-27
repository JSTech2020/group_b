import React from 'react';
import './StoryPagination.css';

function StoryPagination(props){
  return (
  <ul className="story-pagination">
    {props.page > 0 &&
      <li onClick={() => props.onChange(props.page - 1)} className="story-pagination-item">
        <a>{"<"}</a>
      </li>
    }
    <li className="story-pagination-item">
      <a>{props.page+1} / {props.pageCount}</a>
    </li>
    {props.page < props.pageCount - 1 &&
      <li onClick={() => props.onChange(props.page + 1)} className="story-pagination-item">
        <a>{">"}</a>
      </li>
    }
  </ul>
  );
}

export default StoryPagination;