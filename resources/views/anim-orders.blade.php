<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  <div 
    id="root-main--anim-orders"
    class="react-root"
    data-orders="{{$orders}}"
    data-api-url-node="{{$API_URL_NODE}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>

  <div id="portal-cart"></div>
  <div id="portal-nav-drawer"></div>
  {{-- <div id="portal-modal"></div> --}}
  <div id="portal-mobile-filters-drawer"></div>
  {{-- react --}}
 
  {{-- =============================================== --}}

</x-layout>
