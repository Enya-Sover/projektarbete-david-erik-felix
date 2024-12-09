import { createContext } from "react";

export const CitatContext = createContext()

export function CitatContextProvider ({children}){

    useEffect(() => {
        let getGreetings = async () => {
            let respone = await fetch()
        }
    }, [])
}