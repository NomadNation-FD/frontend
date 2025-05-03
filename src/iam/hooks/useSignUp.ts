import { useContext, useState } from "react";
import { IAMApi } from "../services/iam-api";
import { User } from "../model/user";
import { useNavigate } from "react-router";
import { IAMContext } from "../contexts/iam-context";
import { ProfileApi } from "../services/profile-api";

const iamApi = new IAMApi();
const profileApi = new ProfileApi();

export function useSignUp() {
    const navigate = useNavigate();
    const [userRequest, setUserRequest] = useState<User>(new User("", "", "", ""));
    const [open, setOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const { setLoggedIn, setUser } = useContext(IAMContext);

    const handleChange = (name: keyof User, value: string | File) => {
        setUserRequest((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();

            formData.append("email", userRequest.email);
            formData.append("password", userRequest.password);
            formData.append("name", userRequest.name);

            if (userRequest.profilePicture instanceof File) {
                formData.append("profilePicture", userRequest.profilePicture);
            }

            const res = await iamApi.signUp(formData);

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
                500: "Error en el servidor",
            };

            setSnackbarMessage(errorMessages[status]);
            if (status === 500) {
                setOpen(true);
            }
        }
    };

    const closeSnackbar = () => {
        setOpen(false);
    };

    return { user: userRequest, handleChange, handleSubmit, open, snackbarMessage, closeSnackbar };
}
