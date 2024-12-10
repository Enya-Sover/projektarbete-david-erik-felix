import { createContext } from "react";
import { useState, useEffect } from "react";    

export const CitatContext = createContext()


export function CitatContextProvider ({children}){

    let [greetings, setGreetings] = useState('')

    useEffect(() => {
        let getGreetings = async () => {
<<<<<<< HEAD
            let response = await fetch('https://api.quotable.io/random')
            let json = await response.json()
            setGreetings(json)
        }
        getGreetings()
    }, [])
console.log(greetings)
=======
            let response = await fetch(`https://api.quotable.io/random`)
            let json = await response.json()
            setGreetings(json.content)
        }
        getGreetings()
    }, [])
    console.log(greetings)
>>>>>>> 329ca1bd9858b2d696fdbeb2d3fccc13e8779cc4

    return(
        <CitatContext.Provider value={{ greetings, setGreetings}}>
            {children}
        </CitatContext.Provider>    
    )
}