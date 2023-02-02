<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  <div 
    id="root-main"
    data-products="{{$products}}"
    data-num-total-products="{{$num_total_products}}"
    data-api-url-node="{{$API_URL_NODE}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>
  
  <div id="portal-cart"></div>
  <div id="portal-navdrawer"></div>
  <div id="portal-modal"></div>
  {{-- react --}}
  
  {{-- =============================================== --}}

</x-layout>
