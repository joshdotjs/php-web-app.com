
import React, { useState, useEffect, useRef, useContext } from "react";
import { gsap } from 'gsap';

import AuthContext from '@/context/auth-ctx';

import logo from 'img/svg/logo.svg';

import { lc, lg, lo, lp, lb, lr, ly, log } from 'util/log';
import { getLS, setLS } from 'util/local-storage';
import { fireEvent } from 'util/custom-event';
import { fetchPOST2 } from 'util/fetch';

import { showNotify, updateNotify } from "@/comps/_layout/notify/notify";

// ==============================================

const ValidationForm = ({refs, form_validation_errors, title, name, idx, auth_form, updateAuthForm, }) => {

  const id = `input-field-${name}`;

  console.log(`form_validation_error[${name}]`, form_validation_errors[name]);

  return (
    <div 
      ref={(elem) => refs.current[idx] = elem} 
      className="col-span-6 sm:col-span-3 lg:col-span-2"
      style={{
        position: 'relative'
      }}
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
        <span className="text-gray-400">{' '}(required)</span>
      </label>

      <div className="relative mt-1 rounded-md shadow-sm">

        <input
          type="text" 
          name={name} 
          onChange={updateAuthForm(name)}
          value={auth_form[name]}
          id={id}
          // className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          style={{
            padding: '0.5rem 1rem'
          }}
          className={`
            block w-full appearance-none rounded-md border
            ${form_validation_errors[name].error 
              ? 
                'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm shadow-sm' 
              :
                'border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            }
            
            `}
        />

        <div
          id="error-icon" 
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
          style={{
            opacity: 0,
            transform: 'translateY(-4%)'
          }}
        >
          <div className="h-5 w-5 text-red-500" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
        </div>

      </div>

      <p 
        id="error-message"
        className="mt-2 text-sm text-red-600"
        style={{
          position: 'absolute',
          bottom: 0,
          transform: 'translateY(110%)',
          opacity: 0,
        }}
      >
        {form_validation_errors[name].message}
      </p>

    </div>
  );
};

// ==============================================

export default function PageAuth({ auth_type }) {

  // --------------------------------------------

  const { logIn } = useContext(AuthContext);

  // --------------------------------------------
  
  const [auth_form, setAuthForm] = useState( { email: 'josh@josh.com', password: 'josh' } );
  const updateAuthForm = (key) => (e) => setAuthForm( (prev) => ({...prev, [key]: e.target.value }) );

    // --------------------------------------------

  useEffect(() => {
    console.log('auth_form: ', auth_form);
  }, [auth_form]);
  
  // --------------------------------------------
  
  // [Custom Endpoint] Register new user:
  const submitAuthForm = async (e) => {

    e.preventDefault();

    showNotify({
      id: 'auth-notification',
      loading: true,
      title: 'Authenticating...',
      message: 'Logging you in',
      autoClose: false,
      disallowClose: true,
    });

    // clear previous errors
    clearErrors();

    let url = '';
    // if (auth_type === 'register') { endpoint = `${PHP.rest_url}/signup`; }
    // if (auth_type === 'login')    { endpoint = `${PHP.rest_url}/signin`; }
    if (auth_type === 'register') { url = `/api/register`; }
    if (auth_type === 'login')    { url = `/api/login`; }

    lo('submit Auth form');

    console.log('body: ', auth_form);

    // const data = await fetchPOST(endpoint, auth_form);

    // const url = `${API_URL_LARAVEL}/api/login`;
    console.log('url: ',url);
    const body = {
      email: auth_form.email,
      password: auth_form.password,
    };
    console.log('body: ', body);


    // const [data, error] = await fetchPOST2({ endpoint, 
    const [data, error] = await fetchPOST2({ url, 
      body,
    });
    console.log('data: ', data);
    console.log('error: ', error);

    if (data.status === 2 && !error) {
      updateNotify({
        id: 'auth-notification',
        color: 'teal',
        title: 'Success!',
        message: 'You are now logged in',
        icon:
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        ,
        autoClose: 2000,
        onClose: () => {
          const { user, token } = data;
          console.log('user: ', user);
          console.log('token: ', token);
          logIn({ user, token });
        }
      });


    }
    if (data.status === 1 || error) {
      lr('ERROR');
      console.log('response: ', data);
      console.error('auth problem');

      const { validation_failure, message } = data;

      updateNotify({
        id: 'auth-notification',
        color: 'red',
        title: 'Error!',
        message: 'TODO: List error message returned from backend',
        icon: 
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-exclamation" viewBox="0 0 16 16">
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
          </svg>
        ,
        autoClose: 4000,
        onClose: () => {}
      });

      setFormValidationErrors((prev) => ({ ...prev,  [validation_failure]: { error: true, message } }));
    }
  };

  // --------------------------------------------

  const validation_error_refs = useRef([]);

  const [form_validation_errors, setFormValidationErrors] = useState({
    email:    { error: false, message: '' },
    password: { error: false, message: '' },
  });

  const clearErrors = () => {
    validation_error_refs.current.forEach((_, idx) => removeError(idx));

    for (let key in form_validation_errors) {
      form_validation_errors[key] = { error: false, message: '' }
    }

  };

  // --------------------------------------------

  // -Actual side-effect: Result of async HTTP request
  useEffect(() => {
    // applyError();

    console.log('useEffect');

    if (form_validation_errors['email'].error) {
      applyError(0);
    } 
    
    if (form_validation_errors['password'].error){
      applyError(1);
    }

    // if (form_validation_error['stock']) {
    //   applyError(1);
    // } else {
    //   // removeError(1);
    // }

  }, [form_validation_errors]);

  // --------------------------------------------

  const applyError = (idx) => {
    const tl = gsap.timeline({ repeat: 0 }); 

    const container = validation_error_refs.current[idx];   
    const error_message = container.querySelector('#error-message');
    const error_icon = container.querySelector('#error-icon');

    const duration = 0.2;
    gsap.to(error_message, { opacity: 1, duration, });
    gsap.to(error_icon,    { opacity: 1,  duration, });

    const dur = 0.1;
    const dist = 5;
    tl.to(container, { x:  dist, duration: dur / 2 })
      .to(container, { x: -dist, duration: dur })
      .to(container, { x:  dist, duration: dur })
      .to(container, { x: -dist, duration: dur })
      .to(container, { x:  0,    duration: dur / 2 });

  };

  // --------------------------------------------

  const removeError = (idx) => {

    const container = validation_error_refs.current[idx];
    const error_message = container.querySelector('#error-message');
    const error_icon = container.querySelector('#error-icon');

    const duration = 0.2;
    gsap.to(error_message, { opacity: 0, duration, });
    gsap.to(error_icon,    { opacity: 0, duration, });

  };

  // --------------------------------------------

  return (
    // <NotificationsProvider>

      <div
        className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">


          <img className="mx-auto h-14 w-auto" src={logo} alt="Logo" />
          
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            { auth_type === 'register' && 'Register a new account'}
            { auth_type === 'login' && 'Log in to your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or {' '}
            { 
              auth_type === 'register' 
              && 
              <a 
                // href="/auth-login" 
                // href={`${PHP.site_url}/auth-login`}
                href={`/auth/login`}
                className="font-medium text-indigo-600 hover:text-indigo-500"
                style={{ borderRadius: '100vmax' }}
              >
                sign in
              </a>
            }
            { 
              auth_type === 'login' 
              && 
              <a 
                // href="/auth-register" 
                // href={`${PHP.site_url}/auth-register`}
                href='/auth/register'
                className="font-medium text-indigo-600 hover:text-indigo-500">register</a>
            }
            
          </p>
        </div>
      
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">

              {/* - - - - - - - - - - - - - - - - - - - -  */}
              {/* - - - - - - - - - - - - - - - - - - - -  */}
              {/* - - - - - - - - - - - - - - - - - - - -  */}
              {/* - - - - - - - - - - - - - - - - - - - -  */}

              <ValidationForm refs={validation_error_refs} title="Email"    name='email'    idx={0}  { ...{ form_validation_errors, auth_form, updateAuthForm, } } />
              <ValidationForm refs={validation_error_refs} title="Password" name='password' idx={1}  { ...{ form_validation_errors, auth_form, updateAuthForm, } } />

              {/* - - - - - - - - - - - - - - - - - - - -  */}
              {/* - - - - - - - - - - - - - - - - - - - -  */}
              {/* - - - - - - - - - - - - - - - - - - - -  */}
              {/* - - - - - - - - - - - - - - - - - - - -  */}
      
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
      
                <div className="text-sm">
                  <a onClick={() => alert('feature coming soon!')} className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">Forgot your password?</a>
                </div>
              </div>
      
              <div>
                <button
                  onClick={submitAuthForm} 
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  style={{ borderRadius: '100vmax' }}
                >
                  {auth_type === 'login' && <span>Sign in</span>}
                  {auth_type === 'register' && <span>Register</span>}
                </button>
              </div>
            </form>
      
          </div>
        </div>
      </div>
    
    // </NotificationsProvider>
  );
}