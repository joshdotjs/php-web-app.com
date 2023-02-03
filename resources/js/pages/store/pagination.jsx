import React, { Fragment } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

// ==============================================

const Link = ({ page_num, updatePageNum, children }) => {

  // --------------------------------------------

  const active_styles = 'relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 cursor-pointer';
  const inactive_styles   = 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer';

  // --------------------------------------------

  return (
    <a
      // href="#"
      onClick={() => updatePageNum(Number(children)  - 1)}
      aria-current="page"
      className={page_num === Number(children) - 1 ? active_styles : inactive_styles}
    >
      {children}
    </a>    
  );

  // --------------------------------------------

};

// ==============================================

export default function Pagination({ num_products, page_num, updatePageNum }) {

  // --------------------------------------------

  const products_per_page = 6;
  const num_pages = Math.ceil(num_products / products_per_page)

  // --------------------------------------------

  let arr = [];

  // Case 1: Less than 7 pages    display: 1,2,3,4,5,6
  // Case 2: >=7 pages            display: 1,2,3,...,7    page_num: 1,2       case-A
  //                                                                 2,3,4,...,7    page_num: 3         case-B
  //                                                                 3,4,5,...,7    page_num: 4
  //                                                                 1,...,5,6,7    page_num: 5,6,7     case-C


  // Case 2: >=6 pages            display: 
  //                                       1,2,3,4,    ...,9    page_num: 1,2,3         case-A                   page_num === 1 | 2 | 3
  //                                       1,...,3,4,5,...,9    page_num: 4             case-B                   3 < page_num < num_pages-2
  //                                       1,...,4,5,6,...,9    page_num: 5
  //                                       1,...,5,6,7,...,9    page_num: 6
  //                                       1,...,    6,7,8,9    page_num: 7,8,9         case-C                   page_num === num_pages-2 | num_pages-1 | num_pages

  if (num_pages < 7) { // case 1
    for (let i = 0; i < num_pages; ++i) {
      arr.push(<Fragment key={`pagination-link-${i + 1}`}><Link {...{page_num, updatePageNum}}>{i + 1}</Link></Fragment>);
    }
  } else if (num_pages >= 7) { // case 2

    // if (page_num === 1 || page_num === 2) { // case-A
      arr.push(<Fragment key={`pagination-link-${0 + 1}`}><Link {...{page_num, updatePageNum}}>{0 + 1}</Link></Fragment>);
      arr.push(<Fragment key={`pagination-link-${1 + 1}`}><Link {...{page_num, updatePageNum}}>{1 + 1}</Link></Fragment>);
      arr.push(<Fragment key={`pagination-link-${2 + 1}`}><Link {...{page_num, updatePageNum}}>{2 + 1}</Link></Fragment>);
      
      arr.push(
        <Fragment key={`pagination-link-${3 + 1}`}>
          <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
            ...
          </span>
        </Fragment>
      );
              
      arr.push(<Fragment key={`pagination-link-${4 + 1}`}><Link {...{page_num, updatePageNum}}>{num_pages}</Link></Fragment>);

    // } else if (page_num <= num_pages - 3) { // case-B
    // } else { // case-C
    // }
    




  }


  // --------------------------------------------

  return (
    <div 
      id="pagination"
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          // href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{1 + (page_num * products_per_page)}</span> to <span className="font-medium">{Math.min(products_per_page + (page_num * 6), num_products)}</span> of{' '}
            <span className="font-medium">{num_products}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              // href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
           
            {arr}
            

            

            <a
              // href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}