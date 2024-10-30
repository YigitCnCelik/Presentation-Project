import React, { useState } from 'react';

const CardHeader = ({ title, lastUpdate, createdBy, onTitleChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleClick = () => setIsEditing(true);

  const handleTitleChange = (e) => setNewTitle(e.target.value);

  const handleTitleBlur = () => {
    setIsEditing(false);
    if (newTitle !== title) onTitleChange(newTitle);
  };

  return (
    <header className="flex flex-col w-full leading-loose max-w-[250px]">
      <div className="flex justify-between items-center w-full text-sm font-medium text-neutral-800">
        <div className="flex flex-1 shrink gap-5 justify-between items-center w-full basis-0 min-w-[240px]">
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              autoFocus
              className="border-b border-gray-300 focus:outline-none"
            />
          ) : (
            <h2 onClick={handleTitleClick} className="gap-1 self-stretch my-auto cursor-pointer">
              {title}
            </h2>
          )}
        </div>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 text-xs font-semibold"
          aria-label="Delete Presentation"
        >
          Delete
        </button>
      </div>
      <p className="gap-1.5 self-start mt-1 text-xs text-gray-400">{lastUpdate}</p>
      <p className="gap-1.5 self-start mt-1 text-xs text-gray-400">{"Created by " + createdBy}</p>
    </header>
  );
};

export default CardHeader;
