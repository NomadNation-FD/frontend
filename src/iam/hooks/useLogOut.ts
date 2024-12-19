import { useContext } from "react";
import { IAMContext } from "../contexts/iam-context";

export function useLogOut() {
    const { setLoggedIn, setUser } = useContext(IAMContext);

    const logOut = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        setUser(null);
    };

    return { logOut };
}   