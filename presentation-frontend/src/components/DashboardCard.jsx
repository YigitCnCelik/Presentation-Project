import React, { useState } from 'react';
import CardFooter from './CardFooter';
import { NewsHeaderCard } from 'react-ui-cards';

const DashboardCard = ({ presentationName, lastUpdated, thumbnail, createdBy, onTitleUpdate, onDelete, onLinkUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(presentationName);
  const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [link, setLink] = useState(''); // State to store the link

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleBlur = () => {
    setIsEditing(false);
    if (title !== presentationName) {
      onTitleUpdate(title);
    }
  };

  const handleLinkSubmit = async () => {
    const updatedPresentation = link;
    await onLinkUpdate(updatedPresentation); // Call the passed function with the new link
    setShowModal(false); // Close the modal
    setLink(''); // Reset the link input
  };

  return (
    <article
      className="relative flex flex-col justify-center p-4 bg-white rounded shadow-sm max-w-[282px]"
      onMouseEnter={() => setShowMenu(true)} // Show menu on hover
      onMouseLeave={() => setShowMenu(false)} // Hide menu when not hovering
    >
      {/* Menu that appears on hover */}
      {showMenu && (
        <div className="absolute top-2 right-2 z-10 bg-white border border-gray-300 rounded shadow-lg p-2">
          <button onClick={() => setIsEditing(true)} className="block w-full text-left">Rename</button>
          <button onClick={() => setShowModal(true)} className="block w-full text-left">Edit</button>
          <button onClick={onDelete} className="block w-full text-left text-red-600">Delete</button>
        </div>
      )}

      <NewsHeaderCard
        title={
          isEditing ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleBlur}
              autoFocus
              className="border border-gray-300 rounded p-1"
            />
          ) : (
            <h2 onClick={() => setIsEditing(true)}>{title}</h2>
          )
        }
        date={lastUpdated}
        author={createdBy}
        thumbnail={thumbnail}
      />
      <CardFooter />

      {/* Modal for editing the link */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-5 max-w-sm mx-auto">
            <h3 className="text-lg mb-2">Edit Thumbnail</h3>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter new thumbnail link"
              className="border border-gray-300 rounded p-1 w-full mb-4"
            />
            <div className="flex justify-end">
              <button onClick={() => setShowModal(false)} className="mr-2 text-gray-500">Cancel</button>
              <button onClick={handleLinkSubmit} className="bg-blue-500 text-white rounded px-3 py-1">Submit</button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default DashboardCard;
