import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { disableClick, enableClick } from '../../../util/dom';

import ChevronDownSVG from '@/comps/svg/chevron-down';

import './dropdown-2.scss';

// ==============================================

const sort_options_arr = [
  { title: 'Price',  sub_title: 'High to low', col: 'price',  type: 'DESC'  },
  { title: 'Price',  sub_title: 'Low to high', col: 'price',  type: 'ASC' },
  { title: 'Name',   sub_title: 'A to Z',      col: 'title',  type: 'ASC'  },
  { title: 'Name',   sub_title: 'Z to A',      col: 'title',  type: 'DESC' },
  { title: 'Rating', sub_title: '',            col: 'rating', type: 'DESC'  },
];

// ==============================================

export default function Dropdown({
  updateProducts, setSort
}) {

  // --------------------------------------------
  
  const dropdown_options = ['one', 'two', 'three'];
  
  // --------------------------------------------

  return (
    <div className="dropdown">
    <button className="dropdown__button">
      <h5>Sort By</h5>
      <ChevronDownSVG />
    </button>

    <div className="dropdown__menu">
      {  
        dropdown_options.map((dropdown_option, idx) => {
          return (
            <div key={idx} className="dropdown-option">{dropdown_option}</div>
          );
        })
      }
    </div>

    <Dropdown />

  </div>
  );

}