// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

export default function App(){
    return(
        <h1 class="bg-blue-500">FROM REACT</h1>
    );
}

const root = document.querySelector('#react-root');
if(root){
    createRoot(root).render(<App />)
}