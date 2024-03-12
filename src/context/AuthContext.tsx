import { Dispatch, SetStateAction, createContext } from "react";

interface AuthContextProps {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as AuthContextProps);
