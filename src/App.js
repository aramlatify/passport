import React, {useState,useEffect} from 'react';

import RTL from './component/RTL/rast'
import ThemeProvider  from './component/Themeprovider/index'

import Main from './pages/Main'
import Footer from './pages/footer'


import  "./App.css";
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
export default function App (){
    const [isLoading, setLoading] = useState(true);

    function fakeRequest() {
      return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }
  
    useEffect(() => {
      fakeRequest().then(() => {
        const el = document.querySelector(".spinner");
        if (el) {
          el.remove();
          setLoading(!isLoading);
        }
      });
    }, []);
  
    if (isLoading) {
      return null;
    }
    const queryClient = new QueryClient()

    return(
        <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <RTL>
            
            <Main/>
            
            
           
               <Footer/>
            </RTL>
        </ThemeProvider>
        </QueryClientProvider>

    )};

    
