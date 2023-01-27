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
    <div
      className="my-4"
      style={{
        display: 'flex'
      }}
    >

      {
        options.map((option, idx) => {
          const key = `radio-${idx}`;
          return (
            <div 
              key={key} 
              onClick={() => setSelected(option)} 
              className={`my-1 p-1 text-center cursor-pointer ${selected === option ? 'bg-green-300' : ''}`}
              style={{
                height: '75px'
              }}
            >
              <img 
                src="/img/products/shoes/pegasus-purple.webp" 
                style={{
                  height: '100%'
                }}
              />
            </div>
          );
        })
      }
    </div>
  );

  // --------------------------------------------
}

// ==============================================