import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Death note");

  const onValueChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
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
