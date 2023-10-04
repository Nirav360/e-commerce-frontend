import React, { useState } from "react";

const MyImage = ({ imgs }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const image = imgs?.images?.map((element, index) => {
    return (
      <figure key={index}>
        <img
          src={element}
          alt={imgs.title}
          style={{
            height: 100,
            width: 150,
            border: 2,
            borderRadius: 16,
            borderStyle: "solid",
            marginTop: 2,
          }}
          onClick={() => setSelectedImage(element)}
        />
      </figure>
    );
  });
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="grid-rows-4 w-40">{image}</div>
        <div className="flex items-center">
          <img
            src={selectedImage ? selectedImage : imgs?.images[0]}
            alt={imgs?.title}
            width={400}
            height={150}
          />
        </div>
      </div>
    </>
  );
};

export default MyImage;
