import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Input } from "@chakra-ui/react";
import { useSignIn } from "../hooks/useSignIn";

export function LoginForm() {
    const { user, handleChange, handleSubmit } = useSignIn();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit();
    };

    return (
        <div className="flex flex-col mt-24">
            <Toaster />
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
                    Iniciar sesión
                </Button>
            </form>

        </div>
    );
}