import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f75f30e3813d9123df10633370b43fadc24875ac2cb0791797efca3bbb051fd?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa", text: "Edit" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1a4baa674facc1ccb59e15be23cbd86f6f7e810b61dd1d5e1044d853195d814?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa", text: "Rename" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4436dd2dbb651c398d4612e0b6cb2e52836cc1b1f944de7e529fc30822487c84?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa", text: "Delete" }
];

function MenuComponent({ onEdit }) {
  return (
    <nav className="flex flex-col py-1 text-xs font-medium leading-loose whitespace-nowrap bg-white rounded shadow-lg max-w-[131px] text-neutral-800">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          text={item.text}
          onClick={item.text === 'Edit' ? onEdit : null}  // Sadece "Edit" öğesinde onEdit işlevini çağır
        />
      ))}
    </nav>
  );
}

export default MenuComponent;
