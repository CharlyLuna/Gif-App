import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifImages = await getGifs(category);
    setImages(gifImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h2>{category}</h2>
      <div className='card-grid'>
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
