import React from "react";

export const ImageCard = (props) => {
  const { imgSrc, imgTags, imgAuthor, imgLink } = props;
  return (
    <div className="container px-2">

      <img src={imgSrc} alt={imgTags} />

      <p className="text-center font-semibold text-gray-700 py-2">
        Photo by: {imgAuthor}
      </p>
      <p className="py-1">
        Tags:{" "}
        {imgTags.split(",").map((tag, index) => (
          <span className="pl-2 font-medium text-emerald-700" key={index}>
            #{tag.trim()}
          </span>
        ))}
      </p>
    </div>
  );
};
