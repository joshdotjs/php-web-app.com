import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
import uuid from 'react-uuid';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import CartContext from '@/context/cart-ctx';

import { lc, lg, lo, lp, lb, lr, ly } from '@/util/log';

gsap.registerPlugin(Flip);


// ==============================================

export default function Cart() {

  // --------------------------------------------

  const refs = useRef([]);


  useEffect(() => {

    
    const addItem = () => {  


      setLayout_ctx((prev) => { 
        const new_item = { id: 'BBB', status: "entered" };
        const items = [new_item, ...prev.items];
        // const state = Flip.getState(q(".line-item")); 
        const state = Flip.getState(refs.current); 
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
    

  const cartCtx = useContext(CartContext);
  const { layout_ctx, setLayout_ctx } = cartCtx;
  useEffect(() => {
    console.log('cartCtx: ', cartCtx);
  }, [cartCtx]);

  // const [layout, setLayout] = useState(() => ({
  //     items: [
  //       { id: uuid(), status: "entered" },
  //     ].reverse(),
  //     state: undefined,
  //   }
  // ));

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
    item.status = "exiting-2"; // JOSH: This mutates the state!!!!
    
    setLayout_ctx((prev_layout) => { // Update state without mutation:

      console.log('prev_layout: ', prev_layout);

      const { items: prev_items } = prev_layout;

      const row_index = prev_items.findIndex(r => r.id === item.id);

      // Update the row
      const clone = [...prev_items];
      clone[row_index].status = 'exiting-2';

      return {
        items: clone,
        // state: Flip.getState(q(".line-item")),
        state: Flip.getState(refs.current),
      };
    });

  };

  // --------------------------------------------
  
  const removeItems = useCallback((exiting_items) => {
      
    if (!exiting_items.length) return;
    
    setLayout_ctx((prev) => {{

      const non_exiting_items = prev.items.filter((item) => {
        return !exiting_items.includes(item);
      });

      return {
        // state: Flip.getState(q(".line-item")),
        state: Flip.getState(refs.current),
        items: non_exiting_items, // this removes one item from the array => remove corresponding item from DOM
      };
    }});
  }, [q]);

  // --------------------------------------------

  useLayoutEffect(() => {
    if (!layout_ctx?.state) return;

    const duration = 0.3;


    
    // get the items that are exiting in this batch
    const exiting = layout_ctx.items.filter(item => item.status === "exiting-2");
    ctx.add(() => {
      
      // Flip.from returns a timeline
      const timeline = Flip.from(layout_ctx.state, {
        absolute: true, 
        ease: "power1.inOut",
        // targets: q(".line-item"),
        targets: refs.current,
        scale: true,
        simple: true,
        onEnter: elements => {

          debugger;
          ly('onEnter()');
          console.log('elements: ', elements);
          // -There should not be three elements here.
          //  --in callback for addEventListener for add-cart event:
          //    ---items:
          //      ---{ id: '4cb7dd3c-cb12-d800-c331-3b91a4fd0358', status: 'entered' }
          //      ---{ id: '99162857-22e6-db81-3e57-bd9244c6ac94', status: 'entered' }
          //    ---state.targets:
          //      ---div#line-item-99162857-22e6-db81-3e57-bd9244c6ac94.line-item       (this is the element in DOM inserted into #cart-container)
          //
          //  --Then, cart-ctx is re-rendered.
          //  --Then, onEnter()
          //    ---

          return gsap.fromTo(elements, { 
            opacity: 0,
            scale: 0,
            duration
          }, { 
            opacity: 1,
            scale: 1,
            duration,
            onStart: () => {
              lb('onStart()');
              debugger;
            },
            onComplete: () => {
              lg('onComplete()');
              debugger;
            },
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

  }, [ctx, layout_ctx, q, removeItems]);

  // --------------------------------------------
  
  return (
    <div 
      id="cart-container"
      className="text-center" ref={container_ref}
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

      {layout_ctx && layout_ctx?.items.map((item, idx) => {

        const key = `line-item-${item.id}`;

        return (
          <div
            ref={el => refs.current[idx] = el}
            id={key} 
            key={key}
            // data-flip-id={key}
            className={`line-item
              bg-green-400 mb-5 px-4 py-2
            `} 
            onClick={() => remove(item)}
            style={{ 
              display: item.status === 'exiting-2' ? 'none' : 'grid'
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