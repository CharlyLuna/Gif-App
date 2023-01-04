import { useState } from "react";
import { AddCategory, GifGrid, ResetButton } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onResetCategories = () => {
    setCategories([]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <ResetButton onReset={onResetCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
