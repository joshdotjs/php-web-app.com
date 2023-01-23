<x-layout>
  
  {{-- =============================================== --}}

  <div class="bg-red-500">
    STORE
  </div>

  {{-- react --}}
  <div 
    id="react-root--store-product-page" 
    data-product="{{$product}}"
    data-variants="{{$variants}}"
    data-api-url="{{$API_URL}}"
  ></div>
  {{-- react --}}

  {{-- =============================================== --}}

</x-layout>
