import { useEffect, useState } from "react";
import { getGifs } from "./helpers/getGifs";

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
      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
