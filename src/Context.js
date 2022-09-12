import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

let API = "https://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],
  };

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fecthApiData = async (url) => {
        dispatch({ type: "SET_LOADING" });
    
        try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          dispatch({
            type: "GET_DATA",
            payload: {
              hits: data.hits,
              nbPages: data.nbPages,
            },
          });
          // isLoading = false;
        } catch (error) {
          console.log(error);
        }
      };

// to remove the post
  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

//search post

  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

      // To Call API
  useEffect(() => {
    fecthApiData(`${API}query=${state.query}`);
  }, [state.query]);


  return (
    <AppContext.Provider value={{...state,removePost,searchPost}}>
        {children}
    </AppContext.Provider>
  )
}

//create custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}