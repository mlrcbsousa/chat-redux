// external
import React from 'react';
import { emojify } from 'react-emojione';


const hashCode = (str) => { // java String#hashCode
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const intToRGB = (i) => {
  const c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
};

const Message = ({ message }) => {
  const { author, content, created_at } = message;
  return (
    <div className="message-container">
      <i className="author">
        <span
          style={{ color: `#${intToRGB(hashCode(author))}` }}
        >{author}</span>&nbsp;<small>{created_at.slice(11, 19)}</small>
      </i>
      <p>{emojify(content)}</p>
    </div>
  );
};

export default Message;
