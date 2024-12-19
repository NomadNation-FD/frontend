import { createContext } from "react";
import { User } from "../model/user";

export type IAMContextType = {
    isLoggedIn: boolean;
    setLoggedIn: (val: boolean) => void;
    user: User | null;
    setUser: (user: User | null) => void;
}

export const IAMContext = createContext<IAMContextType>({
    isLoggedIn: false,
    setLoggedIn: () => { },
    user: null,
    setUser: () => { }
});