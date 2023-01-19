<x-layout>
  
  {{-- =============================================== --}}

  <style>

    input {
      color: black;
    }
  </style>


  {{-- react --}}
  <div id="react-root--home-page" data-api-url="{{$API_URL}}"></div>
  {{-- react --}}
  
  {{-- =============================================== --}}

  @auth
    {{-- this will appear if logged in  --}}

    <div class="flex-row my-3 my-md-0">
      <a href="#" class="text-white mr-2 header-search-icon" title="Search" data-toggle="tooltip" data-placement="bottom"><i class="fas fa-search"></i></a>
      <span class="text-white mr-2 header-chat-icon" title="Chat" data-toggle="tooltip" data-placement="bottom"><i class="fas fa-comment"></i></span>
      <a href="/profile/{{ auth()->user()->username }}" class="mr-2"><img title="My Profile" data-toggle="tooltip" data-placement="bottom" style="width: 32px; height: 32px; border-radius: 16px" src="https://gravatar.com/avatar/f64fc44c03a8a7eb1d52502950879659?s=128" /></a>
      <a class="btn btn-sm btn-success mr-2" href="/create-post">Create Post</a>
      <form action="#" method="POST" class="d-inline">
        <button class="btn btn-sm btn-secondary">Sign Out</button>
      </form>
    </div>

  @else
    {{-- this will appear if not logged in --}}
    <form action="/login" method="POST" class="mb-0 pt-2 pt-md-0">

      @csrf

      <div class="row align-items-center">
        <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input name="loginusername" class="form-control form-control-sm input-dark" type="text" placeholder="Username" autocomplete="off" />
        </div>
        <div class="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input name="loginpassword" class="form-control form-control-sm input-dark" type="password" placeholder="Password" />
        </div>
        <div class="col-md-auto">
          <button class="btn btn-primary btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  @endauth

  {{-- =============================================== --}}

</x-layout>
