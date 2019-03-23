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
    <div>
      <strong
        style={{ color: `#${intToRGB(hashCode(author))}` }}
      >{author}</strong>&nbsp;<span>{created_at.slice(11, 19)}</span>
      <div>{emojify(content)}</div>
    </div>
  );
};

export default Message;
