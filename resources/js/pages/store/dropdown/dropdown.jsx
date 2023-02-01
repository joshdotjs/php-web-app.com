import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { disableClick, enableClick } from '../../../util/dom';

// ==============================================

const sort_options_arr = [
  { title: 'Price',  sub_title: 'High-Low', type: 'DESC'  },
  { title: 'Price',  sub_title: 'Low-High', type: 'ASC' },
  { title: 'Name',   sub_title: 'A-Z',      type: 'ASC'  },
  { title: 'Name',   sub_title: 'Z-A',      type: 'DESC' },
];

// ==============================================

export default function Dropdown({
  // updateProducts, 
  sort_type,
  setSortType
}) {

  // --------------------------------------------

  const chooseSort = (sort_type, idx) => {

    disableClick(); // chooseSort() is run along with hideSortDropdown() => enableClick() run on completion of animation

    const duration = 0.1;

    // -hide all checks:
    const refs = check_refs.current;
    refs.forEach((ref) => {
      gsap.to(ref, { opacity: 0, duration });
    });

    const ref = check_refs.current[idx];
    const tl = gsap.timeline();

    // -flash / show the active check:
    tl.to(ref, { opacity: 1, duration, })
      .to(ref, { opacity: 0, duration, })
      .to(ref, { opacity: 1, duration, })
      .to(ref, { opacity: 0, duration, });

    tl.to(ref, {
      opacity: 1,
      duration,
      onComplete: () => {
        toggleSortDropdown();
      },
    });

    // update sort state: 
    setSortType(sort_type);

    // updateProducts({ sort_type });
  };

  // --------------------------------------------

  const ref = useRef(null);
  const check_refs = useRef([]);

  // --------------------------------------------

  const [ show_sort_dropdown, setShowSortDropdown ] = useState(false);

  // --------------------------------------------

  const showSortDropdown   = () => {

    console.log('opening');

    const elem = ref.current;

    let duration = 0.3;
    gsap.to(elem, {
      opacity: 1,
      scale: 1,
      duration,
      onStart: () => {
        elem.style.display = 'block';
        disableClick();
      },
      onComplete: () => enableClick(),
    });

    setShowSortDropdown(true);  
  }

  // --------------------------------------------

  const hideSortDropdown   = () => { 

    console.log('closing');

    const elem = ref.current;

    let duration = 0.3;
    gsap.to(elem, { 
      opacity: 0,
      scale: 0.8, 
      duration,
      onComplete: () => {
        elem.style.display = 'none';
        enableClick();
      },
    });

    setShowSortDropdown(false); 
  }

  // --------------------------------------------

  const toggleSortDropdown = () => { 
    if (show_sort_dropdown) {
      hideSortDropdown();
      removeEventListener('click', hideSortDropdown, { once: true });
    } else {
      showSortDropdown();
      addEventListener('click', hideSortDropdown, { once: true });
    }
  };

  // --------------------------------------------

  return (
    <div className="relative inline-block text-left">
      <div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleSortDropdown();
          }}
          type="button" 
          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" 
          // id="menu-button" 
          aria-expanded="false" 
          aria-haspopup="true"
        >
          <span>Sort By{sort_type?.sub_title && ': '}</span>
          { sort_type?.title && <strong className="ml-2" style={{ color: '#757575'}}>{sort_type?.title}: </strong> }
          { sort_type?.sub_title && <span className="ml-2" style={{ color: '#757575'}}>{sort_type?.sub_title}</span> }
          {/* <!-- Heroicon name: mini/chevron-down --> */}
          <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div // Sort dropdown menu 
        ref={ref}
        className={`
          absolute   right-0 
          mt-2 
          origin-top-right 
          rounded-md 
          bg-white 
          shadow-2xl 
          ring-1 
          ring-black 
          ring-opacity-5 
          focus:outline-none
          z-10
          opacity-0
          hidden
        `}
        style={{ transform: 'scale(0.8)' }}
        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1"
      >
        <div 
          className="py-1" role="none" onClick={e => e.stopPropagation()}
        >
          { sort_options_arr.map(({ title, sub_title, direction }, idx) => (
            <button 
              key={`${title}-${idx}`}
              onClick={() => chooseSort({ title, sub_title, direction }, idx)}
              style={{ width: '200px' }}
              className="text-left font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0"
            >
                  
              <svg //  Heroicon name: mini/check
                ref={el => check_refs.current[idx] = el}
                style={{ opacity: 0 }}
                className="inline text-indigo-600 texth-5 w-5 mr-2" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>

              <strong>
                {title}{sub_title && ': '}
              </strong>

              {sub_title}

            </button>
          ))}
        </div>
      </div>
    </div>
  );

}