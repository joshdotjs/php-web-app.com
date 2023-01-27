import React, { useState, useEffect, useRef } from "react";

import { ly, lc } from "../../util/log";

// ==============================================


export default function Storefront() {

  // -----------------------------------------------

  const heroSection = () => (
    <div
      className="relative bg-gray-900">
      {/* <!-- Decorative image and overlay --> */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/hero-mens.webp`} alt="" className="h-full w-full object-cover object-center" /> */}
        <img src={`/img/hero-mens.webp`} alt="" className="h-full w-full object-cover object-center" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50"></div>
  








        {/* <Navbar /> */}











  
      <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
        <p className="mt-4 text-xl text-white">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</p>
        <a href="#" className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">Shop New Arrivals</a>
      </div>
    </div>
  );

  // -----------------------------------------------

  const main = () => (
    <main>

      {/* <!-- Collection section --> */}
      <section aria-labelledby="collection-heading" className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
        <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
        <p className="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
  
        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <a href="#" className="group block">
            <div aria-hidden="true" className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
              {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/new-arrivals-mens.webp`} alt="Brown leather key ring with brass metal loops and rivets on wood table." className="h-full w-full object-cover object-center" /> */}
              <img src={`img/new-arrivals-mens.webp`} alt="Brown leather key ring with brass metal loops and rivets on wood table." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">Handcrafted Collection</h3>
            <p className="mt-2 text-sm text-gray-500">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
          </a>
  
          <a href="#" className="group block">
            <div aria-hidden="true" className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
              {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/new-arrivals-women.webp`}  alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard." className="h-full w-full object-cover object-center" /> */}
              <img src={`img/new-arrivals-women.webp`}  alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">Organized Desk Collection</h3>
            <p className="mt-2 text-sm text-gray-500">The rest of the house will still be a mess, but your desk will look great.</p>
          </a>
  
          <a href="#" className="group block">
            <div aria-hidden="true" className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
              {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/new-arrivals-kids.webp`} alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad." className="h-full w-full object-cover object-center" /> */}
              <img src={`img/new-arrivals-kids.webp`} alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">Focus Collection</h3>
            <p className="mt-2 text-sm text-gray-500">Be more productive than enterprise project managers with a single piece of paper.</p>
          </a>
        </div>
      </section>
  
      {/* <!-- Featured section --> */}
      <section aria-labelledby="social-impact-heading" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg" alt="" className="h-full w-full object-cover object-center" />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">Level up</span>
                <span className="block sm:inline">your desk</span>
              </h2>
              <p className="mt-3 text-xl text-white">Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.</p>
              <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Workspace</a>
            </div>
          </div>
        </div>
      </section>  

      {/* <!-- Category section --> */}
      <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
  
        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                <a href="#" className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" className="absolute inset-0">
                    {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/category-clothing-women.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    <img src={`/img/category-clothing-women.webp`}  alt="" className="h-full w-full object-cover object-center" />
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                  <span className="relative mt-auto text-center text-xl font-bold text-white">New Arrivals</span>
                </a>
  
                <a href="#" className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" className="absolute inset-0">
                    {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/category-shoes-women.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    {/* <img src={`img/jordan-1.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    <img src={`/img/men-clothing-a.webp`}  alt="" className="h-full w-full object-cover object-center" />
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                  <span className="relative mt-auto text-center text-xl font-bold text-white">Productivity</span>
                </a>
  
                <a href="#" className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" className="absolute inset-0">
                    {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/category-glasses-women.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    <img src={`/img/shoes.webp`}  alt="" className="h-full w-full object-cover object-center" />
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                  <span className="relative mt-auto text-center text-xl font-bold text-white">Workspace</span>
                </a>
  
                <a href="#" className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" className="absolute inset-0">
                    {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/category-hats.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    {/* <img src={`img/shoes-a-2.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    {/* <img src={`img/white-shoes.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                  <span className="relative mt-auto text-center text-xl font-bold text-white">Accessories</span>
                </a>
  
                <a href="#" className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" className="absolute inset-0">
                    {/* <img src={`${PHP.site_url}/wp-content/uploads/2023/01/category-shoes.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    {/* <img src={`/img/fleece.webp`}  alt="" className="h-full w-full object-cover object-center" /> */}
                    <img src={`/img/accessories-1.webp`}  alt="" className="h-full w-full object-cover object-center" />
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                  <span className="relative mt-auto text-center text-xl font-bold text-white">Sale</span>
                </a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>




      {/* <!-- Featured section --> */}
      <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            {/* <img src="/img/red-women-shoes.webp" alt="" className="h-full w-full object-cover object-center" /> */}
            {/* <img src="/img/white-shoes.webp" alt="" className="h-full w-full object-cover object-center" /> */}


            <video autoPlay={true} loop={true} >
              <source src="/video/Nike_Volume_2-Hero_Loop.mp4" type="video/webm" />
            </video>
            
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple productivity</h2>
              <p className="mt-3 text-xl text-white">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
              <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Shop Focus</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  // -----------------------------------------------

  return (
    <div className="bg-white">
    
      { heroSection() }

      { main() }
    
    </div>
  );

  // -----------------------------------------------
}