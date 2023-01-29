<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  <div 
    id="root-main"
    data-products="{{$products}}"
    data-api-url="{{$API_URL_NODE}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>
  
  <div id="portal-cart"></div>
  <div id="portal-navdrawer"></div>
  <div id="portal-modal"></div>
  {{-- react --}}
  
  {{-- =============================================== --}}

</x-layout>
