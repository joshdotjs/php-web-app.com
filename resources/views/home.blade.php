<x-layout>
  
  {{-- =============================================== --}}

  {{-- <lottie-player src="https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> --}}
  {{-- <lottie-player id="lottie-player-1" src="ae/adobe-loading-animation--rounded-7dot5px.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player> --}}
  
  {{-- react --}}
  <div 
    id="react-root--home-page" 
    class="react-root"
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
