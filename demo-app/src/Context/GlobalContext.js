import React ,{createContext}from "react";
export const Global=createContext()

const student={
    fullname:'nikit deshar',
    age:22,
    address:'chhampi'
}

const GlobalContextProvider=(props)=>(
   <Global.Provider value={student}>
    {props.children}



   </Global.Provider>
)


export default GlobalContextProvider