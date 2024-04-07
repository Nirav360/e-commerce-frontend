import { useState } from "react";

const MyImage = ({ imgs }) => {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <>
      <div className="flex items-center gap-x-2 ml-2 md:ml-0 cursor-pointer">
        {imgs?.images.map((element, index) => (
          <div key={index}>
            <img
              src={element}
              alt={imgs?.title}
              style={{
                borderRadius: 8,
                alignItems: "center",
              }}
              onClick={() => setSelectedImage(element)}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-center">
        <img
          src={
            selectedImage
              ? selectedImage
              : imgs?.images
              ? imgs?.images[0]
              : null
          }
          alt={imgs?.title}
          style={{ borderRadius: 16 }}
          className="h-80"
        />
      </div>
    </>
  );
};

export default MyImage;
