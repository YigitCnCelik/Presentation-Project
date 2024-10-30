import React from 'react';

const PresentationCard = ({ title, lastUpdate, author }) => {
  return (
    <article className="flex z-0 flex-col grow shrink justify-center p-4 bg-white rounded shadow-sm min-w-[240px] w-[266px]">
      <div className="flex flex-col w-full leading-loose max-w-[250px]">
        <div className="flex justify-between items-start w-full text-sm font-medium text-neutral-800">
          <div className="flex flex-1 shrink gap-5 justify-between items-center w-full basis-0 min-w-[240px]">
            <h3 className="gap-1 self-stretch my-auto">{title}</h3>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f922ad659dd71ce4b4c14d18132659cdbb0bc930de5f70ec31cb61b7c9e3500?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[3.4] w-[17px]" />
          </div>
        </div>
        <div className="gap-1.5 self-start mt-1 text-xs text-gray-400">
          Last update: {lastUpdate}
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0964f8ca80de68121e9572535f96273ba71afd40f518c015506d08826e5170b?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa" alt="Presentation thumbnail" className="object-contain mt-3 max-w-full rounded-sm aspect-[1.77] w-[250px]" />
      <div className="flex gap-5 items-center mt-3 w-full max-w-[250px] min-h-[33px]">
        <div className="flex gap-1.5 items-center self-stretch my-auto w-[158px]">
          <div className="flex gap-1.5 self-stretch my-auto min-h-[19px]" />
        </div>
      </div>
      <p className="text-xs leading-loose text-gray-400">by {author}</p>
    </article>
  );
};

export default PresentationCard;