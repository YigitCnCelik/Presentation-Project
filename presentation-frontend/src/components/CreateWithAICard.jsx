import React from 'react';
import { ProductCard } from 'react-ui-cards';

const CreateWithAICard = () => {
  return (
    <div className="flex gap-5 items-start text-lg font-bold leading-loose text-white min-w-[240px] w-[282px]">
      <div className="flex flex-col justify-center items-center px-12 py-16 rounded shadow-sm bg-[linear-gradient(50deg,#4F61FF_0%,#F450F9_100%)] min-h-[160px] min-w-[240px] w-[282px] max-md:px-5">
        <div className="flex gap-4 justify-center items-center">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/382432da1c1bbf0edbce6d4d47a5dbb2a7795788fa00a28e680c4608f2b4f002?placeholderIfAbsent=true&apiKey=5399f550c4674f1592635656f2be14aa" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.11] w-[39px]" />
          <div className="self-stretch my-auto">
            Create with AI
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWithAICard;