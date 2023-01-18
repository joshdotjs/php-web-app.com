<x-layout>
  <style>
    * {
      color: black;
    }
  </style>

  <div class="container py-md-5 container--narrow">
      <h2>
        <img class="avatar-small" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> {{$email}}
        <form class="ml-2 d-inline" action="#" method="POST">
          <button class="btn btn-primary btn-sm">Follow <i class="fas fa-user-plus"></i></button>
          <!-- <button class="btn btn-danger btn-sm">Stop Following <i class="fas fa-user-times"></i></button> -->
        </form>
      </h2>

      <div class="profile-nav nav nav-tabs pt-2 mb-4">
        <div>
          <a href="#" class="profile-nav-link nav-item nav-link active">Posts: {{$postCount}}</a>
        </div>

      </div>

      <div class="list-group">
        @foreach($posts as $post)
        <a href="/order/{{$post->id}}" class="list-group-item list-group-item-action">
          <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" />
          <strong>{{$post->title}}</strong> on {{$post->created_at->format('n/j/Y')}}
        </a>
        @endforeach
      </div>
    </div>
</x-layout>