import React from "react";
import { useRef } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit, onRemove, onChange }) => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(inputRef.current.value);
  };
  const onChangeHandler = () => {
    onChange(inputRef.current.value);
  };
  const onRemoveHandler = () => {
    onRemove();
    inputRef.current.value = "";
  };
  return (
    <div className="searchBar">
      <form onSubmit={submitHandler}>
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Search By Category"
          ref={inputRef}
        />
        {inputRef.current?.value && <span onClick={onRemoveHandler}>x</span>}
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
