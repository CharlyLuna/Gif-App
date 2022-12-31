import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Demon slayer"]);

  const onAddCategory = () => {
    setCategories(["nueva categoria", ...categories]);
    // setCategories((cat) => [...cat, "nueva categoria"]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifApp</h1>
      {/* Input */}
      <AddCategory />
      {/* Gif list */}
      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Item */}
    </>
  );
};
