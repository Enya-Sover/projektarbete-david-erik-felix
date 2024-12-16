import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  let getUser = JSON.parse(localStorage.getItem("user")) || [
    {
      userName: "admin",
      password: "password",
      todos: [
        {
          id: 1,
          title: "laga mat",
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
        },
      ],
    },
  ];
  let [regUser, setRegUser] = useState(getUser);
 
    const [currentUser, setCurrentUser] = useState(() => {
      return JSON.parse(localStorage.getItem('currentUser')) || null;
    });

    const [currentUserData, setCurrentUserData] = useState(
      regUser.find((user) => user.userName === currentUser)
    );


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(regUser));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [regUser, currentUser]);

  return (
    <>
      <LoginContext.Provider
        value={{ regUser, setRegUser, currentUser, setCurrentUser, setCurrentUserData, currentUserData }}
      >
        {children}
      </LoginContext.Provider>
    </>
  );
}
