import { useContext, useState } from "react";
import { IAMApi } from "../services/iam-api";
import { User } from "../model/user";
import { useNavigate } from "react-router";
import { toaster } from "@/components/ui/toaster";
import { IAMContext } from "../contexts/iam-context";
import { ProfileApi } from "../services/profile-api";

const iamApi = new IAMApi();
const profileApi = new ProfileApi();

export function useSignIn() {
    const navigate = useNavigate();
    const [userRequest, setUserRequest] = useState<User>(new User("", "", "", ""));
    const { setLoggedIn, setUser } = useContext(IAMContext);

    const handleChange = (name: keyof User, value: string) => {
        setUserRequest((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await iamApi.signIn(userRequest);

            const data = res.data;
            const token = data.token;

            if (token) {
                localStorage.setItem("token", token);

                const res = await profileApi.getProfileInfo();
                const profile = new User("", "", res.data.name, res.data.profilePicture);

                setUser(profile);
                setLoggedIn(true);

                navigate("/");
            }
        } catch (error: any) {
            const status = error.response?.status || 500;

            const errorMessages: Record<number, string> = {
                401: "Credenciales incorrectas",
                500: "Error en el servidor",
            };

            toaster.create({
                description: errorMessages[status],
                type: "error",
            });
        }
    };

    return { user: userRequest, handleChange, handleSubmit };
}
