import { Avatar } from "@/components/ui/avatar";
import { IAMContext } from "@/iam/contexts/iam-context";
import { useLogOut } from "@/iam/hooks/useLogOut";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router";

export function Toolbar() {
    const { isLoggedIn, user } = useContext(IAMContext);
    const { logOut } = useLogOut();

    return (
        <div className="bg-blue w-full flex justify-around py-4" >
            <Link to="/" className="font-montserrat text-4xl text-white font-semibold">NomadNation</Link>
            <div className="flex gap-10">
                {
                    isLoggedIn && user ?
                        <>
                            <div className="flex gap-4 items-center">
                                <Avatar src={String(user.profilePicture)} />
                                <p className="text-white font-montserrat font-medium">{user.name}</p>
                            </div>
                            <Button className="font-roboto font-semibold text-white bg-gray-900 hover:bg-gray-500 p-4"
                                onClick={logOut}>
                                Cerrar sesión
                            </Button>
                        </>
                        :
                        <>
                            <Link to="/sign-in">
                                <Button className="font-roboto font-semibold text-white bg-gray-900 hover:bg-gray-500 p-4">Iniciar sesión</Button>
                            </Link>
                            <Link to="/sign-up">
                                <Button className="font-roboto font-semibold text-gray bg-white hover:bg-gray-50 p-4" >Registrarse</Button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};