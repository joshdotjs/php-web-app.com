import React from 'react';
import uuid from 'react-uuid';


const lis = [
  {id: uuid(), img: '/img/products/shoes/women/Pegasus-Trail-4-pink.webp'},  
  {id: uuid(), img: '/img/products/shoes/women/Structure-24-white.webp'}, 
  {id: uuid(), img: '/img/products/shoes/women/React-Infinity-3 By-You-white.jpeg'}
];

// ==============================================

export default function Page() {

  // --------------------------------------------

  return(
    <div id="grid-container"> 

      {/* =================================== */}

      <div id="grid-left">
        {/* Grid Left */}
      </div>

      {/* =================================== */}

      <div id="grid-right">

        {/* --------------------------------- */}

        <div id="filter-button-row">
          Filter button row
        </div>

        {/* --------------------------------- */}

        <ul id="grid-items">
          {
            lis.map((li) => {
              return (
                <li key={li.id} className="box">
                  <div className="box-child">
                    <div className="card">
                      <div className="img-container"> <img src={li.img}/> </div>
                      <div className="card-bottom">
                        <div className="front">CARD</div>
                        <div className="back"></div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          }
        </ul>

        {/* --------------------------------- */}

        <div id="pagination">
          Pagination row
        </div>

        {/* --------------------------------- */}

      </div>

      {/* =================================== */}

    </div>
  );

  // --------------------------------------------
}