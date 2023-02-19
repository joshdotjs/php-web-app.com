<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  <div 
    id="react-root-store"
    class="react-root"
    data-products="{{$products}}"
    data-num-products="{{$num_products}}"
    data-api-url-node="{{$API_URL_NODE}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>
  {{-- <div id="portal-mobile-filters-drawer"></div> --}}
  {{-- react --}}
  
  {{-- =============================================== --}}

</x-layout>
