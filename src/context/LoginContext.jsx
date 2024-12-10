import { createContext, useEffect, useState } from "react";


export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  let [regUser, setRegUser] = JSON.parse(localStorage.getItem('user')) ? useState(JSON.parse(localStorage.getItem('user')))
: useState([{
    userName: "admin",
    password: "password",
    todos: [
      {
        id: 1,
        titel: "laga mat",
        description: "",
        estimation: 60,
        completed: false,
        category: "hälsa",
        deadline: "onsdag",
      },
    ],
    habits: [
      {
        id: 1,
        title: "Träning",
        repetitions: 10,
        priority: "Hög",
      },
    ],
    events: [
      {
        id: 1,
        name: "möte med gertrud",
        start: "2024-12-17T09:00",
        end: "2024-12-17T10:00",
      }
    ]
  }]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(regUser));
  }, [regUser]);

 

  const [currentUser, setCurrentUser] = useState(null)

  

  return (
    <>
      <LoginContext.Provider value={{regUser, setRegUser, setCurrentUser}}>{children}</LoginContext.Provider>
    </>
  );
}
