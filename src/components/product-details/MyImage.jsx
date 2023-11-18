import { Skeleton } from "@mui/material";
import { useState } from "react";

const MyImage = ({ imgs, isPending }) => {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid-rows-4 w-40 ml-2 md:ml-0">
          {(isPending ? Array.from(new Array(3)) : imgs?.images || []).map(
            (element, index) => {
              return (
                <div key={index}>
                  {element ? (
                    <figure>
                      <img
                        src={element}
                        alt={imgs?.title}
                        style={{
                          height: 100,
                          width: 150,
                          border: 1,
                          borderRadius: 16,
                          borderStyle: "solid",
                          marginTop: 3,
                        }}
                        onClick={() => setSelectedImage(element)}
                      />
                    </figure>
                  ) : (
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={150}
                      height={100}
                      sx={{ margin: 2 }}
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
        <div className="flex items-center w-44">
          {isPending ? (
            <Skeleton variant="rounded" width={400} height={150} />
          ) : (
            <img
              src={selectedImage ? selectedImage : imgs?.images ? imgs?.images[0] : null}
              alt={imgs?.title}
              width={400}
              height={150}
              style={{ borderRadius: 16 }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MyImage;
