<x-layout>
  {{-- @vite('resources/js/pages/products') --}}


  {{-- =============================================== --}}

  <main id="page" class="bg-green-300">

    <h1>Products Page</h1>

    {{-- <z-button id="get-products-btn" title="Get Prdoucts"></z-button> --}}

    <hr>

    <div class="grid grid-cols-2">
      @foreach($products as $product)

        <div class="product-card p-4" style="border: solid black 1px;">
          <h5>{{ $product->title }}</h5>

          <p>{{ $product->body }}</p>
          
          <a href="/product/{{$product->id}}" class="list-group-item list-group-item-action">
            <web-comp title="Product Details"></web-comp>  
          </a>

          {{-- <z-button class="add-to-cart-btn" title="Add to Cart" data-id={{ $product->id }}></z-button> --}}
                    
        </div>

      @endforeach
    </div>


    <section>
      <h2>Cart:</h2>
      <div id="cart">
      </div>
      
      {{-- <z-button id="send-to-checkout-btn" title="Checkout"></z-button> --}}
    </section>


  </main>

  {{-- =============================================== --}}

</x-layout>
