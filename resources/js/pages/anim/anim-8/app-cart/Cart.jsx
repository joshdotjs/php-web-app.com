import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, } from 'react';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);


// ==============================================

export default function Cart() {

  // --------------------------------------------

  useEffect(() => {
    const addItem = () => {  
      setLayout((prev) => { 
        const new_item = { id: uuid(), status: "entered" };
        const items = [new_item, ...prev.items];
        const state = Flip.getState(q(".line-item")); 
        return { items, state }; 
      });
    };
    window.addEventListener('cart-add', addItem);
    return () => window.removeEventListener('cart-add', addItem);
  }, []);

  // --------------------------------------------

  const container_ref = useRef();
  const q = gsap.utils.selector(container_ref); // Returns a selector function that's scoped to a particular Element, meaning it'll only find descendants of that Element .

  // --------------------------------------------
    
  const [layout, setLayout] = useState(() => ({
      items: [
        { id: uuid(), status: "entered" },
      ].reverse(),
      state: undefined,
    }
  ));

  // --------------------------------------------
  
  // Create the context
  //  -Add to it later via ctx.add(() => {...})
  const [ctx] = useState(() => gsap.context(() => {}));

  // --------------------------------------------
  
  useEffect(() => {
    return () => ctx.revert();
  }, []);

  // --------------------------------------------
    


  // --------------------------------------------
    
  const remove = (item) => {  

    console.log('item: ', item);

    // set the item as exiting which will add a CSS class for display: none;
    item.status = "exiting"; // JOSH: This mutates the state!!!!
    
    setLayout((prev_layout) => { // Update state without mutation:

      console.log('prev_layout: ', prev_layout);

      const { items: prev_items } = prev_layout;

      const row_index = prev_items.findIndex(r => r.id === item.id);

      // Update the row
      const clone = [...prev_items];
      clone[row_index].status = 'exiting';

      return {
        items: clone,
        state: Flip.getState(q(".line-item")),
      };
    });

  };

  // --------------------------------------------
  
  const removeItems = useCallback((exiting_items) => {
      
    if (!exiting_items.length) return;
    
    setLayout((prev) => {{

      const non_exiting_items = prev.items.filter((item) => {
        return !exiting_items.includes(item);
      });

      return {
        state: Flip.getState(q(".line-item")),
        items: non_exiting_items, // this removes one item from the array => remove corresponding item from DOM
      };
    }});
  }, [q]);

  // --------------------------------------------

  useLayoutEffect(() => {
    if (!layout.state) return;

    const duration = 0.3;
    
    // get the items that are exiting in this batch
    const exiting = layout.items.filter(item => item.status === "exiting");
    ctx.add(() => {
      
      // Flip.from returns a timeline
      const timeline = Flip.from(layout.state, {
        absolute: true, 
        ease: "power1.inOut",
        targets: q(".line-item"),
        scale: true,
        simple: true,
        onEnter: elements => {
          return gsap.fromTo(elements, { 
            opacity: 0,
            scale: 0,
            duration
          }, { 
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration
          });
        },
        onLeave: elements => {
          return gsap.to(elements, { 
            opacity: 0, 
            scale: 0,
            duration
          });
        },
        duration,
      });

      // remove the exiting items from the DOM after the animation is done
      timeline.add(() => removeItems(exiting));
    });

  }, [ctx, layout, q, removeItems]);

  // --------------------------------------------
  
  return (
    <div className="text-center" ref={container_ref}
      style={{ position: 'fixed',
        top: '300px',
        right: 0,
        background: 'lightblue',
        height: '100vh',
        width: '300px',
        zIndex: 100,
      }}
    >
      
      {/* - - - - - - - - - - - - - - - - - - */}

      {layout.items.map((item) => {

        const key = `line-item-${item.id}`;

        return (
          <div      
            id={key} 
            key={key}
            // data-flip-id={key}
            className={`line-item  ${item.status} 
              bg-green-400 mb-5 px-4 py-2
            `} 
            onClick={() => remove(item)}
            style={{ 
              display: item.status === 'exiting' ? 'none' : 'grid'
            }}
          >
            <p>{item.id}</p>
            <p>{item.status}</p>
          </div>
        );
      })}

      {/* - - - - - - - - - - - - - - - - - - */}

    </div>
  );

  // --------------------------------------------
};

// ==============================================