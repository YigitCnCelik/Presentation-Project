import React from 'react';
import { ProductCard } from 'react-ui-cards';

const CreatePresentationCard = () => {
  return (
    <div className="flex flex-col justify-center items-center py-7 pr-10 pl-10 bg-white rounded shadow-sm min-h-[160px] min-w-[240px] w-[282px] max-md:px-5">
      <div className="flex flex-col items-center p-3">
        <div className="flex gap-2.5 justify-center items-center px-3 bg-indigo-500 rounded-xl h-[50px] min-h-[50px] w-[50px]">
        </div>
        <ProductCard
          photos={["https://cdn.builder.io/api/v1/image/assets/TEMP/bb238b6c439bcfd6c35c1ed096c873bc4829ee1906add4dcb298ab3410710c7f"]}
          productName="New Presentation"
          description="Create a new presentation with customizable templates"
          buttonText="Create a new presentation"
          url="create"
        />
      </div>
    </div>
  );
};

export default CreatePresentationCard;
