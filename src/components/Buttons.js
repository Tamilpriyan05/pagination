import React from "react";

const Buttons = ({ maxpage, totalimage, paginate }) => {
  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(totalimage / maxpage); i++) {
    pagenumber.push(i);
  }
  return (
    <div>
      {pagenumber.map((number) => {
        return (
          <button onClick={() => paginate(number)} key={number}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
