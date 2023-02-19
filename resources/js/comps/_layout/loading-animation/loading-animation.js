import gsap from "gsap";

import { lb, lg } from "util/log";

// ==============================================

const template = document.createElement('template');
template.innerHTML = `
  <style>
    #lottie-player-1 {
      position: absolute;
      z-index: 100; 
      height: 200px;
      width: 200px;
      top: 0%; 
      left: 50%;
      /* transform: translate(-50%, -50%); */
      /* background: red; */
      /* border: solid red 10px; */

      display: none;
    }
    /* @media (max-width: 768px) {
      #lottie-player-1 {
        bottom: 5vh;
        right: 50%;
        transform: translateX(50%);
      }
    }
    @media (min-width: 768px) {
      #lottie-player-1 {
        right: 45px;
      }
    } */

  </style>

    <!-- <lottie-player 
      id="lottie-player-1"
      src="./lottie/Untitled-2.json"  
      background="transparent"  
      speed="1"  
      style="width: 300px; height: 300px;"  
    >
    </lottie-player> -->

    
    <!-- <lottie-player src="https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> -->
    <!-- <lottie-player id="lottie-player-1" src="./ae/adobe-loading-animation.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player> -->
    <!-- <lottie-player id="lottie-player-1" src="./ae/adobe-loading-animation--rounded-5px.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player> -->
    <lottie-player id="lottie-player-1" src="ae/adobe-loading-animation--rounded-7dot5px.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
`;

// ==============================================

// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {    

    // ------------------------------------------

    const qs = x => this.querySelector(x);
    const qsAll = x => this.querySelectorAll(x);

    // ------------------------------------------

    const importHTML = () => {
      const content = template.content;
      const cloned = content.cloneNode(true);
      this.append(cloned);
    };
    importHTML();

    // ------------------------------------------

    // const player = qs("#lottie-player-1");
    // player.addEventListener("rendered", (e) => {
    //   setTimeout(() => {
    //     player.play();
    //   }, 1000);
    // });

    // ------------------------------------------

    // addEvent('loading-animation-end', () => {
    // addEventListener('loading-animation-end', () => {

    //   lb('loading-aimation-end event listener');

    //   const loading_anim    = qs('#lottie-player-1');

    //   gsap.to(loading_anim, { 
    //     y: 250,
    //     opacity: 0,
    //     duration: 0.75,
    //     onComplete: function () {
    //       lg('loading anim fade out complete - removing loading anim');
    //       loading_anim.remove();
    //     }
    //   });
    // });

    // ------------------------------------------

    addEventListener('loading-animation-start', () => {

      lb('loading-aimation-end event listener');

      const loading_anim = qs('#lottie-player-1');
      loading_anim.style.display = 'block';

      gsap.fromTo(loading_anim, 
        {
          opacity: 0,
          y: 0,
        },
        { 
          opacity: 1,
          y: 250,
          duration: 0.75,
          // onComplete: function () {
          //   lg('loading anim fade out complete - removing loading anim');
          //   loading_anim.remove();
          // }
      });
    });


    addEventListener('x', () => {
      console.log('event listener fired!');
    });


    // ------------------------------------------

  }

}

// ==============================================

// Step 2: Register
window.customElements.define('loading-animation', CustomElement);