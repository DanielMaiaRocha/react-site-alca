import React from 'react'

const CardTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? "text-black border-[#17a2b8]"
    : "text-black border-black hover:border-slate-600" 
  return (
    <button className= {`${buttonStyles} rounded-lg border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default CardTag