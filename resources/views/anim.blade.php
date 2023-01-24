<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  {{-- <div 
    id="react-root--anim-page" 
    data-api-url="{{$API_URL}}"
  ></div> --}}
  {{-- react --}}

  <div id="root-header"></div>
  
  <div 
    id="root-main"
    data-products="{{$products}}"
    data-api-url="{{$API_URL}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>
  
  {{-- <div id="portal-cart"></div> --}}

  {{-- =============================================== --}}

</x-layout>
