import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import { MantineProvider, Text } from '@mantine/core';
import { RangeCalendar } from '@mantine/dates';

import { disableClick, enableClick } from './util/dom';
import { 
  timeStamp2Date, timeStamp2Time, 
  date2TimeStamp,
  getDateXDaysAgo 
} from '@/util/dates';

gsap.registerPlugin(Flip);

// ==============================================

export default function App({ orders }) {

  // --------------------------------------------

  const data = [
    { ...orders[0], date: timeStamp2Date(orders[0].time_stamp), time: timeStamp2Time(orders[0].time_stamp), color: 'green'  },
    { ...orders[1], date: timeStamp2Date(orders[1].time_stamp), time: timeStamp2Time(orders[1].time_stamp), color: 'purple' },
    { ...orders[2], date: timeStamp2Date(orders[2].time_stamp), time: timeStamp2Time(orders[2].time_stamp), color: 'orange' },
  ];

  // --------------------------------------------

  const filters_refs = useRef([]);
  const items_refs = useRef([]);
  const container_ref = useRef(null); // for dynamic height

  const [form, setForm] = useState({
    all: true,
    green: true,
    orange: true,
    purple: true,
  });

  // --------------------------------------------

  const onChange = (e) => {
    const { checked, name, value } = e.target;
    // console.log('name: ', name, '\tchecked: ', checked, '\tvalue: ', value);
    setForm(prev => {

      const new_state = { ...prev, [name]: checked};
      updateFilters(new_state);     
      return new_state;
    });
  };

  // --------------------------------------------

  function updateFilters(new_form) {

    disableClick();

    // Step 0: Grag refs:
    const items = items_refs.current;
    const container = container_ref.current;

    // MOD: Fix height bug:
    const startHeight = gsap.getProperty(container, "height");
    console.log('startHeight: ', startHeight);


    // Step 1: Get current state
    const state = Flip.getState(items);

    // Step 2: Get active classes
    const classes = getAtiveClasses(new_form);

    // Step 3: Get matches
    const matches = getMatches(classes);
    
    // Step 4: Adjust the display property of each item ("none" for filtered ones, "inline-flex" for matching ones)
    items.forEach(item => item.style.display = matches.indexOf(item) === -1 ? "none" : "grid");
    
    // MOD: Fix height bug:
    const endHeight = gsap.getProperty(container, "height");
    console.log('endHeight: ', endHeight);

    // Step 5: Animate from the previous state
    const flip = Flip.from(state, {
        duration: 0.7,
        scale: true,
        ease: "power1.inOut",
        stagger: 0.08,
        absolute: true,
        onEnter: elements => {
          gsap.fromTo(elements, { 
              opacity: 0, 
              // scale: 0 
            }, 
            { 
              opacity: 1, 
              // scale: 1, 
              duration: 1 
            });
        },
        onLeave: elements => {
          gsap.to(elements, { 
            opacity: 0, 
            // scale: 0, 
            duration: 1 
          });
        },
        onStart: () => {
          const table = container.querySelector('#table');
          table.style.borderBottomLeftRadius =  0;
          table.style.borderBottomRightRadius =  0;
          // gsap.to(container, { 
          //   background: 'rgba(243,244,246, 0)',
          // });
        },
        onComplete: () => {
          const table = container.querySelector('#table');
          table.style.borderBottomLeftRadius =  '0.5rem';
          table.style.borderBottomRightRadius =  '0.5rem';
          // gsap.to(container, { 
          //   background: 'rgba(243,244,246, 1)',
          // });

          enableClick();
        },
    });

    // MOD: Fix height bug: https://greensock.com/forums/topic/27117-filter-animation-with-flip-plugin/?do=findComment&comment=132519
    flip.fromTo(container, {
      height: startHeight
    }, {
      height: endHeight,
      clearProps: "height",
      duration: flip.duration()
    }, 0);
    
  }

  // --------------------------------------------

  function getAtiveClasses(new_form) {
    // -Return an array of classes corresponding to checked checkboxes
    // -ex: ['.green', '.purple']

    const filters = filters_refs.current;
    // const checked_array = filters.filter(checkbox => checkbox.checked);
    const checked_array = filters.filter(checkbox => {
      const is_checked = new_form[checkbox.name];
      // console.log('checkbox: ', checkbox, '\nis_checked: ', is_checked);
      return is_checked;
    });
    // console.log('checked_array: ', checked_array);

    const classes = checked_array.map(checkbox => "." + checkbox.id);
    console.log('classes: ', classes);
    return classes;
  }

  // --------------------------------------------

  function getMatches(classes) {
    // -Input:   array of classes corresponding to checked checkboxes
    // -Output:  array of elements with classes from input
    // -ex:  ['.orange']  =>  [div.item.orange, div.item.orange]
  
    const matches = classes.length ? gsap.utils.toArray(classes.join(",")) : classes;
    // console.log('matches: ', matches);
  
    return matches;
  }

  // --------------------------------------------

  const [clicked_yet, setClickedYet] = useState(false);

  const today = new Date();
  const [date_range, setDateRange] = useState([
    getDateXDaysAgo(6, today), // last week date range (including today)
    today,
  ]);

  useEffect(() => {
    console.log('date_range: ', date_range);
    console.log('date_range[0]: ', date_range[0]);
    console.log('date2TimeStamp(date_range[0]): ', date2TimeStamp(date_range[0]));
  }, [date_range]);

  // --------------------------------------------

  const updateOrders = ({ date_range }) => {

    const time_stamp_start = date2TimeStamp(date_range[0]);
    const time_stamp_end   = date2TimeStamp(date_range[1]);

    console.log('time_stamp_start: ', time_stamp_start, '\ttime_stamp_end: ', time_stamp_end);

    // -Filter through 'orders' to store new 'data' array
    // const updated_orders = orders.filter((order) => time_stamp_start <= order.time_stamp && order.time_stamp <= time_stamp_end);

    // console.log('updated_orders: ', updated_orders);
    // setData(updated_orders);




    // ⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄⌄
    // BEGIN FLIP ANIMATION
    // BEGIN FLIP ANIMATION
    // BEGIN FLIP ANIMATION
    // BEGIN FLIP ANIMATION
    disableClick();

    // Step 0: Grag refs:
    const items = items_refs.current;
    const container = container_ref.current;

    // MOD: Fix height bug:
    const startHeight = gsap.getProperty(container, "height");
    console.log('startHeight: ', startHeight);

    // Step 1: Get current state
    const state = Flip.getState(items);


    // Step 4: Adjust the 'display' attribute on the elements based on date range
    data.forEach(({time_stamp}, idx) => {

      if (time_stamp_start <= time_stamp && time_stamp <= time_stamp_end) {
        items[idx].style.display = 'grid';
      } else {
        items[idx].style.display = 'none';
      }

    });

    // MOD: Fix height bug:
    const endHeight = gsap.getProperty(container, "height");
    console.log('endHeight: ', endHeight);

    // Step 5: Animate from the previous state
    const flip = Flip.from(state, {
        duration: 0.7,
        scale: true,
        ease: "power1.inOut",
        stagger: 0.08,
        absolute: true,
        onEnter: elements => {
          gsap.fromTo(elements, { 
              opacity: 0, 
              // scale: 0 
            }, 
            { 
              opacity: 1, 
              // scale: 1, 
              duration: 1 
            });
        },
        onLeave: elements => {
          gsap.to(elements, { 
            opacity: 0, 
            // scale: 0, 
            duration: 1 
          });
        },
        onStart: () => {
          const table = container.querySelector('#table');
          table.style.borderBottomLeftRadius =  0;
          table.style.borderBottomRightRadius =  0;
          // gsap.to(container, { 
          //   background: 'rgba(243,244,246, 0)',
          // });
        },
        onComplete: () => {
          const table = container.querySelector('#table');
          table.style.borderBottomLeftRadius =  '0.5rem';
          table.style.borderBottomRightRadius =  '0.5rem';
          // gsap.to(container, { 
          //   background: 'rgba(243,244,246, 1)',
          // });

          enableClick();
        },
    });

    // MOD: Fix height bug: https://greensock.com/forums/topic/27117-filter-animation-with-flip-plugin/?do=findComment&comment=132519
    flip.fromTo(container, {
      height: startHeight
    }, {
      height: endHeight,
      clearProps: "height",
      duration: flip.duration()
    }, 0);


    // END FLIP ANIMATION
    // END FLIP ANIMATION
    // END FLIP ANIMATION
    // END FLIP ANIMATION
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^









  };

  // --------------------------------------------

  return (
    <>

      {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}
        {/* <Text>Welcome to Mantine!</Text> */}
        <RangeCalendar 
          amountOfMonths={2}
          value={date_range} 
          onChange={(new_date_range) => {

            if (new_date_range[1] !== null) { // prev === null => currently clicking second date range => update orders with new date range

              console.log('TODO: Apply filter!');
              updateOrders({ date_range: new_date_range });
            } 

            setDateRange(new_date_range);
          }}
          onClick={() => setClickedYet(true)}
          dayStyle={(date) => {

            const chosen_date_1_month  = date_range[0]?.getMonth();
            const chosen_date_1_date   = date_range[0]?.getDate();
            // const chosen_date_2_month  = date_range[1]?.getMonth();
            const chosen_date_2_date   = date_range[1]?.getDate();

            const calendar_month = date.getMonth();
            const calendar_date = date.getDate();

            // This is only for the inital page load with last week
            if (!clicked_yet) {
              if (calendar_month === chosen_date_1_month) {
                if (chosen_date_1_date < calendar_date && calendar_date < chosen_date_2_date) {
                  return { backgroundColor: '#E7F5FF', borderRadius: 0 };
                } 
              }
            }
          }}
        />
      {/* </MantineProvider> */}

      <div className="buttons-container">
        <div>Show:&nbsp;</div>
        <div>
          <label htmlFor="green">   <input ref={el => filters_refs.current[0] = el} onChange={onChange} type="checkbox" name="green"  id="green"  className="filter" checked={form['green']}  /> Green  </label>
          <label htmlFor="orange">  <input ref={el => filters_refs.current[1] = el} onChange={onChange} type="checkbox" name="orange" id="orange" className="filter" checked={form['orange']} /> Orange </label>
          <label htmlFor="purple">  <input ref={el => filters_refs.current[2] = el} onChange={onChange} type="checkbox" name="purple" id="purple" className="filter" checked={form['purple']} /> Purple </label>
        </div>
      </div>



      <div // container 
        ref={container_ref}
        id="container" 
        className="
          shadow 
          rounded-lg
          inline-block min-w-full py-2 align-middle xs:px-6 sm:px-8
        " 
        style={{   
          width: '95vw', maxWidth: '1200px', 
          margin: '0 auto',
          // padding: '1rem'
        }}
      >
        <div // table 
          id="table"
          className="
            shadow 
            divide-y  divide-gray-300
            rounded-lg
            overflow-hidden
            ring-1 ring-black ring-opacity-5 
          " 
        >
          <div // thead 
            className="
              tr thead 
              grid-cols-2  xs:grid-cols-3  sm:grid-cols-4  md:grid-cols-5  lg:grid-cols-6
            "
            style={{ background: 'black' }}
          >
            <div className="th text-left text-sm font-semibold text-gray-900">User</div>
            <div className="th text-left text-sm font-semibold text-gray-900  hidden  sm:inline-block">Status</div>
            <div className="th text-left text-sm font-semibold text-gray-900  hidden  md:inline-block">Total</div>
            {/* <div className="th text-left text-sm font-semibold text-gray-900  hidden  lg:inline-block">Time Stamp</div> */}
            {/* <div className="th text-left text-sm font-semibold text-gray-900  hidden  lg:inline-block">Created At</div> */}
            <div className="th text-left text-sm font-semibold text-gray-900  hidden  lg:inline-block">Date</div>
            <div className="th text-left text-sm font-semibold text-gray-900  hidden  lg:inline-block">Time</div>
            <div className="th text-left text-sm font-semibold text-gray-900  hidden  xs:inline-block  text-right"></div>
            <div className="th text-left text-sm font-semibold text-gray-900                           text-right"></div>
          </div>

          {data.map(({ id, email, status, total, time_stamp, created_at, date, time, color }, idx) => (
            <div 
              key={`order-${id}`} 
              ref={el => items_refs.current[idx] = el} 
              className={`
                tr ${color}  
                grid-cols-2  xs:grid-cols-3  sm:grid-cols-4  md:grid-cols-5  lg:grid-cols-6
              `}
              style={{ background: 'black' }}
            >
              <div className="td truncate">{email}</div>
              <div className="td truncate  hidden  sm:inline-block">{status}</div>
              <div className="td truncate  hidden  md:inline-block">{total}</div>
              {/* <div className="td truncate  hidden  lg:inline-block">{created_at}</div> */}
              <div className="td truncate  hidden  lg:inline-block">{date}</div>
              <div className="td truncate  hidden  lg:inline-block">{time}</div>
              <button className="td truncate  hidden  xs:inline-block  text-right  text-indigo-600 hover:text-indigo-900">Edit</button>
              <button className="td truncate                           text-right  text-indigo-600 hover:text-indigo-900">Details</button>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}