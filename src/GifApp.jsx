import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Demon slayer"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifApp</h1>
      {/* Input */}
      <AddCategory
        // setCategories={onAddCategory}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Gif list */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Item */}
    </>
  );
};
