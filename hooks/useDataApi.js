import React, {useState, useEffect, useReducer} from 'react';
import {Alert} from 'react-native';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {...state, isLoading: true, isError: false};
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const effect = async () => {
      dispatch({type: 'FETCH_INIT'});

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error(response.statusText);
        }

        const json = await response.json();
        dispatch({type: 'FETCH_SUCCESS', payload: json});
      } catch (error) {
        dispatch({type: 'FETCH_FAILURE'});
      }
    };

    if (url) {
      effect();
    }
  }, [url]);

  return [state, setUrl];
};
