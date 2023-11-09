import React, { createContext } from "react";
import all_collection from "../Components/Assets/all_collection";


export const ShopContext = createContext(null)

const ShopContextProvider=(props)=>{
    const contextValue={all_collection}
    return (
       
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
        
    )
}

export default ShopContextProvider