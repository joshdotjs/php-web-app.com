<x-layout>
  
  {{-- =============================================== --}}

  {{-- react --}}
  <div 
    id="react-root--store-product-page" 
    class="react-root"
    data-product="{{$product}}"
    data-variants="{{$variants}}"
    data-api-url-node="{{$API_URL_NODE}}"
    data-api-url-laravel="{{$API_URL_LARAVEL}}"
  ></div>
  {{-- react --}}

  {{-- =============================================== --}}

</x-layout>
