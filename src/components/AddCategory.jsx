import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Death note");

  const onValueChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
    const newInputValue = inputValue.trim();
    event.preventDefault();
    if (newInputValue.length <= 1) return;

    // setCategories(inputValue);
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search gifs'
        value={inputValue}
        onChange={onValueChange}
      />
    </form>
  );
};
