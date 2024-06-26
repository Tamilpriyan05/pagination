import React from "react";

const Image = ({ data, loading }) => {
  return (
    <div>
      {data.map((data) => {
        return <img key={data.id} src={data.thumbnailUrl} title={data.title} />;
      })}
    </div>
  );
};

export default Image;
