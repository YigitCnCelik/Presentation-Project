import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardFooter from './CardFooter';
import { NewsHeaderCard } from 'react-ui-cards';
import MenuComponent from './MenuComponent';  // Menü bileşenini içe aktarın
import { FaEllipsisV } from 'react-icons/fa'; // 3 çizgili simge için ikonu kullanıyoruz

const DashboardCard = ({ presentationName, lastUpdated, thumbnail, createdBy, onTitleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(presentationName);
  const [showMenu, setShowMenu] = useState(false);  // Menü durumunu takip etmek için

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleBlur = () => {
    setIsEditing(false);
    if (title !== presentationName) {
      onTitleUpdate(title);
    }
  };

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <article className="relative flex flex-col justify-center p-4 bg-white rounded shadow-sm max-w-[282px]">
      {/* Sağ üst köşede üç çizgi butonu */}
      <button onClick={toggleMenu} className="absolute top-2 right-2 p-1">
        <FaEllipsisV size={18} />
      </button>

      {/* Menü görünümü */}
      {showMenu && (
        <div className="absolute top-8 right-2 z-10">
          <MenuComponent
            onEdit={() => {
              setIsEditing(true);  // Edit moduna geç
              setShowMenu(false);  // Menü kapanır
            }}
          />
        </div>
      )}

      {/* Kartın ana içeriği */}
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
    </article>
  );
};

export default DashboardCard;
