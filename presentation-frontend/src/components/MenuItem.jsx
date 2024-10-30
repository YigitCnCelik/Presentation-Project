import React from 'react';

function MenuItem({ icon, text }) {
  return (
    <button className="flex gap-2 items-center px-3 py-2 w-full bg-white text-neutral-800">
      <div className="flex gap-1 items-center self-stretch my-auto">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </button>
  );
}

export default MenuItem;