import React, { useState } from 'react';

const InputTag = ({ onClick }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      onClick({ title: inputValue }); // Passando o valor como objeto com a chave 'name'
      setInputValue(''); // Limpar o input depois de clicar
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search here..."
        className="border border-black rounded w-80 px-6 py-3 mb-2 text-black "
      />
    </div>
  );
};

export default InputTag;
