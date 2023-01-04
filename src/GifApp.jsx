import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { ResetButton } from "./components/ResetButton";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onResetCategories = () => {
    console.log("reset");
    setCategories([]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory
        // setCategories={onAddCategory}
        onNewCategory={(value) => onAddCategory(value)}
      />
      <ResetButton onReset={onResetCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
