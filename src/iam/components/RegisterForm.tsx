import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Input } from "@chakra-ui/react";
import { useSignUp } from "../hooks/useSignUp";
import { useState } from "react";

export function RegisterForm() {
    const { user, handleChange, handleSubmit } = useSignUp();
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
        <div className="flex flex-col mt-24">
            <Toaster />
            <form
                onSubmit={onSubmit}
                className="bg-gray-100 h-[550px] justify-evenly items-center flex flex-col w-1/3 mx-auto rounded-lg shadow-lg">
                <h2 className="text-center font-montserrat font-semibold text-[36px]">
                    Únete
                </h2>
                <label htmlFor="profilePicture">
                    <Input
                        type="file"
                        accept="image/*"
                        multiple={false}
                        id="profilePicture"
                        name="profilePicture"
                        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                        className="hidden"
                    />
                    <Avatar size="2xl" src={previewUrl || ""} />
                </label>
                <Input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Nombre"
                    className="w-2/3 bg-white px-5"
                />
                <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Correo electrónico"
                    className="w-2/3 bg-white px-5"
                />
                <Input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Contraseña"
                    className="w-2/3 bg-white px-5"
                />
                <Button
                    type="submit"
                    className="font-roboto font-semibold w-2/3 text-white bg-gray-900 hover:bg-gray-500 p-4">
                    Registrarse
                </Button>
            </form>
        </div>
    );
}