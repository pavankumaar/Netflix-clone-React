import React from 'react';
import './StoryCard.css';

function StoryCard(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const image = props.image;
  const type = props.type;
  return (
    <>
      {type == 1
        ? <div className="storycard">
            <div className="text">
              <div className="title">{title}</div>
              <div className="subtitle">{subtitle}</div>
            </div>
            <div className="image">
              <img src={image}></img>
            </div>
          </div>
        : <div className="storycard">
            <div className="image">
              <img src={image}></img>
            </div>
            <div className="text">
              <div className="title">{title}</div>
              <div className="subtitle">{subtitle}</div>
            </div>
          </div>
      }
    </>
  )
}

export default StoryCard;
