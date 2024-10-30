import React from 'react';

const CreateTemplateCard = () => {
  return (
    <article className="flex flex-col justify-center items-center py-7 pr-10 pl-10 bg-white rounded shadow-sm max-w-[282px]">
      <div className="flex flex-col items-center p-3">
        <div className="flex gap-2.5 justify-center items-center px-3 bg-indigo-500 rounded-xl h-[50px] min-h-[50px] w-[50px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1adcd015a1636ba9e52d82d45058732ab02dd14894920cf0357fd2659c9f7af?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa" alt="" className="object-contain self-stretch my-auto aspect-square w-[25px]" />
        </div>
        <h2 className="mt-2 text-sm font-bold text-center text-indigo-500">
          Create a new presentation
        </h2>
      </div>
    </article>
  );
};

export default CreateTemplateCard;