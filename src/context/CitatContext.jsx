import { createContext } from "react";
import { useState, useEffect } from "react";    

export const CitatContext = createContext()


export function CitatContextProvider ({children}){

    let [greetings, setGreetings] = useState('')
    let [greetings2, setGreetings2] = useState('')

    useEffect(() => {
        let getGreetings = async () => {
            let response = await fetch('https://api.quotable.io/quotes/random')
            let json = await response.json()
            setGreetings(json[0].content)
        }
        getGreetings()

        let breakingBad = async ()=>{
            let response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
            let data = await response.json()
            setGreetings2(data[0].quote)
        }
        breakingBad()
    }, [])

    return(
        <CitatContext.Provider value={{ greetings, greetings2}}>
            {children}
        </CitatContext.Provider>    
    )
}