<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  <div 
    id="react-root--store-product-page" 
    data-product="{{$product}}"
    data-variants="{{$variants}}"
    data-api-url-node="{{$API_URL_NODE}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>

  <div id="portal-cart"></div>
  <div id="portal-navdrawer"></div>
  <div id="portal-modal"></div>
  {{-- react --}}

  {{-- =============================================== --}}

</x-layout>
