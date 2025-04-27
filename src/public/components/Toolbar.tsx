import { Avatar } from "@/components/ui/avatar";
import { IAMContext } from "@/iam/contexts/iam-context";
import { useLogOut } from "@/iam/hooks/useLogOut";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router";
import { Sidebar } from "./Sidebar";

export function Toolbar() {
    return (
        <div className="bg-blue w-full flex justify-around items-center py-4" >
            <Link to="/" className="font-montserrat text-3xl md:text-4xl text-white font-semibold">NomadNation</Link>
            <div className="hidden md:block">
                <ToolbarButtons />
            </div>
            <div className="md:hidden">
                <Sidebar>
                    <ToolbarButtons />
                </Sidebar>
            </div>
        </div>
    );
};

function ToolbarButtons() {
    const { isLoggedIn, user } = useContext(IAMContext);
    const { logOut } = useLogOut();

    return (
        <div className="flex flex-col md:flex-row gap-4 items-center">
            {
                isLoggedIn && user ?
                    <>
                        <div className="flex flex-row gap-4 items-center">
                            <Avatar src={String(user.profilePicture)} />
                            <p className="text-white font-montserrat font-medium">{user.name}</p>
                        </div>
                        <Button
                            className="font-roboto font-semibold text-white bg-gray-900 hover:bg-gray-500 p-4"
                            onClick={logOut}>
                            Cerrar sesión
                        </Button>
                    </>
                    :
                    <>
                        <Link to="/sign-in">
                            <Button
                                className="font-roboto font-semibold text-white bg-gray-900 hover:bg-gray-500 p-4 w-full">
                                Iniciar sesión
                            </Button>
                        </Link>
                        <Link to="/sign-up">
                            <Button
                                className="font-roboto font-semibold text-gray-900 bg-white hover:bg-gray-50 p-4 w-full">
                                Registrarse
                            </Button>
                        </Link>
                    </>
            }
        </div>
    );
}