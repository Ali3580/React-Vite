import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "IT SOLUTIONS",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Muhamamd Ali Umar",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the api data
  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // to remove the post
  const removePost = (post_ID) =>{
    dispatch({
      type: "REMOVE_POST",
      payload: post_ID,
    });
  };

  // search

  const searchPost = (searchQuery) =>{
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  // pagination

  const getNextPage = () => {
    dispatch({
      type: NEXT_PAGE,
    });
  };
  
  const getPrevPage = () => {
    dispatch({
      type: PREV_PAGE,
    });
  };

  // to call the api func

  useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  },[state.query,state.page]);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage, removePost, searchPost, getNextPage, getPrevPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
