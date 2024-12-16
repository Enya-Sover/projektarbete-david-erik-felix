import { createContext } from "react";
import { useState, useEffect } from "react";    

export const CitatContext = createContext()


export function CitatContextProvider ({children}){

    let [greetings, setGreetings] = useState('')

    useEffect(() => {
        let getGreetings = async () => {
            let response = await fetch('https://api.quotable.io/random')
            let json = await response.json()
            setGreetings(json)
        }
        getGreetings()
    }, [])

    return(
        <CitatContext.Provider value={{ greetings, setGreetings}}>
            {children}
        </CitatContext.Provider>    
    )
}