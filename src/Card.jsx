import { useState } from "react";

export const Card = ({ question, answer, text, setText }) => {
  const handleClick = () => {
    text === question ? setText(answer) : setText(question);
  };
  return (
    <div
      onClick={handleClick}
      className=" flex bg-gray-300 w-2/5 h-2/5 items-center justify-center rounded-lg"
    >
      <span className="text-3xl text-black">{text}</span>
    </div>
  );
};
