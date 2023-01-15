{{-- @include('header') --}}
<x-layout>

  <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Button text</button>

  {{-- =============================================== --}}

  <!--
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
  -->
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form 
          action="/register"
          class="space-y-6"  
          method="POST"
        >

          @csrf

          {{-- --------------------------------------- --}}

          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <div class="mt-1">
              <input 
                id="username" 
                name="username" 
                type="text" 
                {{-- autocomplete="email"  --}}
                {{-- required  --}}
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
            </div>
          </div>

          {{-- --------------------------------------- --}}

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input 
                {{-- type="email"  --}}
                type="text" 
                name="email" 
                id="email"
                class="
                  block w-full rounded-md  focus:outline-none  sm:text-sm
                  appearance-none   shadow-sm  
                  
                  border-gray-300 px-3 py-2 placeholder-gray-400  focus:border-indigo-500  focus:ring-indigo-500
                  @error('password') 
                  border-red-300  text-red-900  placeholder-red-300  focus:border-red-500   focus:ring-red-500
                  @enderror
                  pr-10
                " 
                {{-- placeholder="you@example.com"  --}}
                {{-- value="adamwathan"  --}}
                aria-invalid="true" 
                aria-describedby="email-error"
              >
              
              @error('email')
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <!-- Heroicon name: mini/exclamation-circle -->
                  <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                </div>
              @enderror
            </div>

            @error('email')
              <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
          </div>

          {{-- --------------------------------------- --}}


          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <input 
                id="password" 
                name="password" 
                type="password" 
                class="
                  block w-full rounded-md  focus:outline-none  sm:text-sm
                  appearance-none   shadow-sm  
                  
                  border-gray-300 px-3 py-2 placeholder-gray-400  focus:border-indigo-500  focus:ring-indigo-500
                  @error('password') 
                  border-red-300  text-red-900  placeholder-red-300  focus:border-red-500   focus:ring-red-500
                  @enderror
                  pr-10
                " 
                {{-- autocomplete="current-password"  --}}
                {{-- required  --}}
                aria-invalid="true" 
                aria-describedby="password-error"
              >
              
              @error('password')
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <!-- Heroicon name: mini/exclamation-circle -->
                  <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                </div>
              @enderror
            </div>

            @error('password')
              <p class="mt-2 text-sm text-red-600" id="password-error">{{ $message }}</p>
            @enderror
          </div>

          {{-- --------------------------------------- --}}

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div class="mt-1">
              <input 
                id="password_confirmation" 
                name="password_confirmation" 
                type="password" 
                {{-- autocomplete="current-password"  --}}
                {{-- required  --}}
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
            </div>
          </div>

          {{-- --------------------------------------- --}}

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              >
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
          </div>

          {{-- --------------------------------------- --}}
          

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign in</button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                <span class="sr-only">Sign in with Facebook</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>

            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                <span class="sr-only">Sign in with Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>

            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                <span class="sr-only">Sign in with GitHub</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {{-- =============================================== --}}

  <div class="container py-md-5">
    <div class="row align-items-center">
      <div class="col-lg-7 py-3 py-md-5">
        <h1 class="display-3">Remember Writing?</h1>
        <p class="lead text-muted">Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
      </div>
      <div class="col-lg-5 pl-lg-5 pb-3 py-lg-5">
        <form action="/register" method="POST" id="registration-form">

          @csrf

          <div class="form-group">
            <label for="username-register" class="text-muted mb-1"><small>Username</small></label>
            <input value="{{ old('username') }}" name="username" id="username-register" class="form-control" type="text" placeholder="Pick a username" autocomplete="off" />
            @error('username')
            <p class="m-0 small alert alert-danger shadow-sm">{{ $message }}</p>
            @enderror
          </div>

          <div class="form-group">
            <label for="email-register" class="text-muted mb-1"><small>Email</small></label>
            <input value="{{ old('email') }}" name="email" id="email-register" class="form-control" type="text" placeholder="you@example.com" autocomplete="off" />
            @error('email')
            <p class="m-0 small alert alert-danger shadow-sm">{{ $message }}</p>
            @enderror
          </div>

          <div class="form-group">
            <label for="password-register" class="text-muted mb-1"><small>Password</small></label>
            <input name="password" id="password-register" class="form-control" type="password" placeholder="Create a password" />
            @error('password')
            <p class="m-0 small alert alert-danger shadow-sm">{{ $message }}</p>
            @enderror
          </div>

          <div class="form-group">
            <label for="password-register-confirm" class="text-muted mb-1"><small>Confirm Password</small></label>
            <input name="password_confirmation" id="password-register-confirm" class="form-control" type="password" placeholder="Confirm password" />
            @error('password_confirmation')
            <p class="m-0 small alert alert-danger shadow-sm">{{ $message }}</p>
            @enderror
          </div>

          <button type="submit" class="py-3 mt-4 btn btn-lg btn-success btn-block">Sign up for OurApp</button>
        </form>
      </div>
    </div>
  </div>

  {{-- @include('footer') --}}
</x-layout>