/* eslint-disable react/prop-types  */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function InputTodo(props) {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { addTodoProps } = props;
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        className="input-text"
        placeholder="Add todo..."
        onChange={onChange}
        value={inputText.title}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle color="#55bcc9" size="20px" className="submit-icon" />
      </button>
    </form>
  );
}

export default InputTodo;
