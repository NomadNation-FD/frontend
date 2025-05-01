import { useSignIn } from "../hooks/useSignIn";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export function LoginForm() {
    const { user, handleChange, handleSubmit, open, snackbarMessage, closeSnackbar } = useSignIn();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit();
    };

    return (
        <div className="flex flex-col min-h-dvh justify-center">
            <Snackbar
                open={open}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                onClose={() => { }}
                message={snackbarMessage}
                action={
                    <Button color="inherit" onClick={closeSnackbar} >X</Button>
                }
            />
            <form
                onSubmit={onSubmit}
                className="bg-gray-100 h-[550px] justify-evenly items-center flex flex-col w-1/3 mx-auto rounded-lg shadow-lg">
                <h2 className="text-center font-montserrat font-semibold text-[36px]">
                    Bienvenido
                </h2>
                <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Correo electrónico"
                    className="w-1/2 bg-white px-5"
                    disableUnderline
                />
                <Input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Contraseña"
                    className="w-1/2 bg-white px-5"
                    disableUnderline
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        color: "#fff",
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        width: "50%",
                        textTransform: "none",
                        backgroundColor: "#18181c",
                        "&:hover": {
                            backgroundColor: "#383842",
                        },
                    }}
                >
                    Iniciar sesión
                </Button>
            </form>
        </div>
    );
}