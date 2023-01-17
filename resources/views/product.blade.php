<x-layout>
  
  {{-- =============================================== --}}

  <main id="page" class="bg-green-300">

    <h1>Page: Product</h1>

    {{-- react --}}
    <div 
      id="react-root--product-page" 
      data-product="{{$product}}"
      data-variants="{{$variants}}"
      data-api-url="{{$API_URL}}"
    ></div>
    {{-- react --}}
    
  </main>

  {{-- =============================================== --}}

</x-layout>
