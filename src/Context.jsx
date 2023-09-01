import React, {useContext} from "react";




const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{greet:"Hello",morning:"Good Morning"}}>
        {children}
    </AppContext.Provider>
};


const useGlobalContext = () =>{
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};