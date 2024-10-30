import React, { useState } from 'react';
import Select from 'react-select';

const DeckHeader = ({ onSortChange }) => { // onSortChange prop'u ekleniyor
  const [selectedOption, setSelectedOption] = useState(null);

  const sortingOptions = [
    { value: 'title_asc', label: 'Title (A-Z)' },
    { value: 'title_desc', label: 'Title (Z-A)' },
    { value: 'recent', label: 'Recently Modified' },
    { value: 'oldest', label: 'Oldest Modified' },
  ];

  const handleChange = (option) => {
    setSelectedOption(option);
    onSortChange(option); // Seçimi üst bileşene iletiyoruz
  };

  return (
    <div className="flex flex-wrap gap-10 justify-between items-start mt-5 w-full font-medium max-w-[1792px] max-md:max-w-full">
      <div className="flex flex-col leading-loose">
        <Select
          options={sortingOptions}
          value={selectedOption}
          onChange={handleChange}
          placeholder="Sort by"
          className="w-5"
          classNamePrefix="select"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: 'black',
              color: 'white',
              border: '1px solid #ccc',
              boxShadow: 'none',
              '&:hover': {
                border: '1px solid #999',
              },
            }),
            option: (provided) => ({
              ...provided,
              backgroundColor: 'black',
              color: 'white',
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 10,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default DeckHeader;
