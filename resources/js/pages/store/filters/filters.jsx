import React from 'react';

import Checkboxes from './checkboxes-flip-layout/checkboxes';
import ChevronAnim from './chevron-anim/chevron-anim';

export default function Filters({ 
  filter,  
  applyFilter,
  categories, genders, prices, 
}) {
  return (
    <>
      <div id="grid-left-left">

        <hr className="border-t border-gray-200 mb-[1.13rem]"></hr>

        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}
        {/* TODO: Make heights bewteen the sections the same */}

        <ChevronAnim title="Category" num={filter.in_init_state['category'] ? 0 : filter.getNum('category')}>
          <Checkboxes type="category" options={categories} set={filter['category']} applyFilter={applyFilter} in_init_state={filter.in_init_state['category']}>
          </Checkboxes>
        </ChevronAnim>

        <hr className="border-t border-gray-200 mt-2 mb-[1.13rem]"></hr>

        <ChevronAnim title="Gender" num={filter.in_init_state['gender'] ? 0 : filter.getNum('gender')}>
          <Checkboxes type="gender" options={genders} set={filter['gender']} applyFilter={applyFilter} in_init_state={filter.in_init_state['gender']} >
          </Checkboxes>
        </ChevronAnim>

        <hr className="border-t border-gray-200 mt-2 mb-4"></hr>
      </div>

      {/* Hack 'padding' to work smoothly with the 'Close Filters' animation */}
      <div id="grid-left-right"></div>  
    </>
  );
}