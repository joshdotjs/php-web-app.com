import React, { useRef } from 'react';
import { gsap } from 'gsap';

import Card from './card';
import ChevronDownSVG from '@/comps/svg/chevron-down';

// ==============================================

export default function Grid({
  refs,
  layout,
  addToCartAnim,

  show_filters,
  setShowFilters,
  filters_container_ref,
  grid_container_ref,
  container_ref,
}) {

  // --------------------------------------------

  const filters_tl_ref = useRef(null);

  // --------------------------------------------

  const openFilters = () => {


    if (filters_tl_ref.current) 
     filters_tl_ref.current.revert();
     
    const tl = gsap.timeline();

    const filters_container = filters_container_ref.current;
    // // filters_tl_ref.current = gsap.to(filters_container, { x: '-100px' });
    filters_tl_ref.current = tl.to(filters_container, { 
      x: '-100%', 
      opacity: 0,
      width: 0,
     });


    // const grid_container = grid_container_ref.current;
    // filters_tl_ref.current = gsap.to(grid_container, { x: '-100px', width: '100%' });
    // filters_tl_ref.current = tl.to(grid_container, { x: '-100px' });

    // const container = container_ref.current;
    // gsap.to(container, { 'grid-template-columns': '0px 1fr' });
    // filters_tl_ref.current = tl.to(container, { 'grid-template-columns': '0px 1fr' }, '<=');
  };

  // --------------------------------------------

  const closeFilters = () => {
    filters_tl_ref.current?.reverse();
  }; 

  // --------------------------------------------

  const openFiltersHandler = () => {

    console.log('fuck')

    setShowFilters((prev) => {

      if (prev) {
        openFilters();
      } else {
        closeFilters();
      }

      return !prev;
    });

  }

  // --------------------------------------------


  return (
      <ul // items
        id="grid-items"
      >
        
        <div id="filter-button-row">

          <div id="show-filters-button" onClick={openFiltersHandler}>
            { show_filters && <h5>Hide Filters</h5>}
            { !show_filters && <h5>Show Filters</h5>}
            <svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path><path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path></svg>
          </div>

          <div id="sort-by-dropdown">
            <h5>Sort By</h5>

            <ChevronDownSVG />
          </div>
          
        </div>

        {layout.items.map((item, idx) => {
          return (            
              <li // item
                key={item.product.id}
                id={`box-${item.product.id}`} 
                className="box"
                style={{ 
                  display: item.status === 'exiting' ? 'none' : 'grid',
                  // minWidth: '200px'
                  // visibility: item.status === 'exited' ? 'hidden' : 'visible'
                }}
                >
                <div 
                  ref={el => refs.current[idx] = el}
                  className="box-child"
                >
                <Card { ...{ item, addToCartAnim, idx } } />
                </div>
              </li>
            );
        })}
      </ul>
  );

  // --------------------------------------------

}

// ==============================================