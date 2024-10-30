import React from 'react';

const DeckHeader = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-start mt-5 w-full font-medium max-w-[1792px] max-md:max-w-full">
      <div className="flex flex-col leading-loose">
        <h2 className="gap-6 self-stretch text-sm whitespace-nowrap text-neutral-800">
          Decks
        </h2>
        <div className="text-xs text-gray-400">8 files</div>
      </div>
      <button className="flex gap-1.5 justify-center items-center px-1 py-0.5 text-xs rounded text-neutral-800">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d19b93194e9a213dfc4792b7458cc8f762ddd1a1b95bcdac444a4f2467f11?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <span className="self-stretch my-auto">Sort by</span>
      </button>
    </div>
  );
};

export default DeckHeader;