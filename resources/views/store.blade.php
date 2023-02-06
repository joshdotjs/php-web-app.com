<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  <div 
    id="root-main"
    class="react-root"
    data-products="{{$products}}"
    data-num-products="{{$num_products}}"
    data-api-url-node="{{$API_URL_NODE}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>
  
  <div id="portal-cart"></div>
  {{-- <div id="portal-navdrawer"></div> --}}
  {{-- <div id="portal-modal"></div> --}}
  <div id="portal-mobile-filters"></div>
  {{-- react --}}
  
  {{-- =============================================== --}}

</x-layout>
