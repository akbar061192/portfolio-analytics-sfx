import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import { Backdrop, CircularProgress } from '@mui/material';
import ErrorDialog from './globals/components/ErrorDialog/ErrorDialog';

export const axiosInstance = axios.create({});

export const useAxiosInterceptors = () => {
  const [counter, setCounter] = useState(0);
  const [errorState, setErrorState] = useState({});

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      request => {
        request.headers = {
          'Access-Control-Allow-Origin': '*',
        };
        setCounter(prev => prev + 1);
        setErrorState({});
        return request;
      },
      error => {
        setCounter(prev => prev - 1);
        setErrorState(error);
        return error;
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      response => {
        setErrorState({});
        setCounter(prev => prev - 1);
        return response;
      },
      error => {
        setErrorState(error);
        setCounter(prev => prev - 1);
        return error;
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return [counter > 0, errorState];
};

const GobalLoader = () => {
  const [loading, errorState] = useAxiosInterceptors();

  const errorHandler = Object.keys(errorState).length > 1 ? true : false;

  return (
    <>
      {loading ? (
        <Backdrop sx={{ color: '#1c9bef', zIndex: 9999 }} open={loading}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        errorHandler && <ErrorDialog errorState={errorState} />
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter basename=''>
    <GobalLoader />
    <App />
  </HashRouter>
);
