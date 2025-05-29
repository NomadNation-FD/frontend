import Input from "@mui/material/Input";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useSignUp } from "../hooks/useSignUp";
import { useState } from "react";

export function RegisterForm() {
    const { user, handleChange, handleSubmit, open, snackbarMessage, closeSnackbar } = useSignUp();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit();
    };

    const handleFileChange = (file: File | null) => {
        if (file) {
            if (previewUrl)
                URL.revokeObjectURL(previewUrl);

            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            handleChange("profilePicture", file);
        }
    };

    return (
        <div className="flex flex-col min-h-dvh justify-center w-8/10 md:w-1/2 xl:w-1/4 mx-auto">
            <Snackbar
                open={open}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                message={snackbarMessage}
                action={
                    <Button color="inherit" onClick={closeSnackbar} >X</Button>
                }
            />
            <form
                onSubmit={onSubmit}
                className="bg-gray-100 flex flex-col items-center gap-10 rounded-lg shadow-lg py-10">
                <h2 className="text-center font-montserrat font-semibold text-[36px]">
                    Únete
                </h2>
                <div className="w-full flex flex-col gap-5 items-center">
                    <label htmlFor="profilePicture">
                        <input
                            type="file"
                            accept="image/*"
                            multiple={false}
                            id="profilePicture"
                            name="profilePicture"
                            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                            className="hidden"
                        />
                        <div className="w-30">
                            <Avatar
                                src={previewUrl || ""}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    aspectRatio: "1/1"
                                }} />
                        </div>
                    </label>
                    <Input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Nombre"
                        className="w-3/4 bg-white px-5"
                        disableUnderline
                    />
                    <Input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="Correo electrónico"
                        className="w-3/4 bg-white px-5"
                        disableUnderline
                    />
                    <Input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        placeholder="Contraseña"
                        className="w-3/4 bg-white px-5"
                        disableUnderline
                    />
                </div>
                <Button
                    type="submit"
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
                    Registrarse
                </Button>
            </form>
        </div>
    );
}