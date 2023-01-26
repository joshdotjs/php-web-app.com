import React, { useEffect } from "react";

// ==============================================
// name="sizes"  options={['sm', 'lg']}    selected={category}  setSelected={setCategory}
export default function RadioButtons({ name, options, option_labels, selected, setSelected }) {

  // --------------------------------------------

  // const options = ['sm', 'lg'];
  // const [selected, setSelected] = useState('');

  // useEffect(() => {
  //   console.log('selected: ', selected);
  // }, [selected]);


  // --------------------------------------------

  return (
    <div className="my-4 flex flex-col">
      <div className={`py-2 px-4 ml-4`}>{name}: </div>
      {
        options.map((option, idx) => {
          const key = `radio-${idx}`;
          return (
            <div 
              key={key} 
              onClick={() => setSelected(option)} 
              className={`border inline my-1 py-1cursor-pointer ${selected === option ? 'bg-green-300' : ''}`}
            >
              {option_labels[idx]}
            </div>
          );
        })
      }
    </div>
  );

  // --------------------------------------------
}

// ==============================================