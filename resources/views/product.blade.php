<x-layout>
  
  {{-- =============================================== --}}

  <main id="page" class="bg-green-300">

    <h1>Page: Product</h1>

    {{-- react --}}
    <div 
      id="react-root--product-page" 
      data-api-url="{{$API_URL}}"
      data-variants="{{$variants}}"
    ></div>
    {{-- react --}}
    
  </main>

  {{-- =============================================== --}}

</x-layout>
