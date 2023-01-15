import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

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
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Search gifs'
        value={inputValue}
        onChange={onValueChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
