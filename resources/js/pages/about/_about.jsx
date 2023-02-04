import React from 'react';
import uuid from 'react-uuid';


const lis = [{id: uuid()},  {id: uuid()}];

// ==============================================

export default function Page() {

  // --------------------------------------------

  return(
    <div id="grid-container"> 

      <div id="grid-left"></div>
      <div id="grid-right">

        <div>
          <div id="filter-button-row">
          </div>

          <ul id="grid-items">
            {
              lis.map((li) => {
                return (
                  <li key={li.id} className="box">
                    <div className="box-child">
                      <div className="card">
                        <div className="img-container"> <img /> </div>
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

          <div id="pagination"></div>
        </div>

      </div>

    </div>
  );

  // --------------------------------------------
}