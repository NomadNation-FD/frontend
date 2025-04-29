import { IAMContext } from "@/iam/contexts/iam-context";
import { useLogOut } from "@/iam/hooks/useLogOut";
import { Avatar, Button } from "@mui/material";
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
                            variant="contained"
                            sx={
                                {
                                    backgroundColor: "#18181c",
                                    "&:hover": {
                                        backgroundColor: "#383842 "
                                    },
                                    fontFamily: "Roboto",
                                    fontWeight: "700",
                                    color: "#fff",
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    letterSpacing: "0"
                                }
                            }
                            onClick={logOut}
                        >
                            Cerrar sesión
                        </Button>
                    </>
                    :
                    <>
                        <Link to="/sign-in">
                            <Button
                                variant="contained"
                                sx={
                                    {
                                        backgroundColor: "#18181c",
                                        "&:hover": {
                                            backgroundColor: "#383842 "
                                        },
                                        fontFamily: "Roboto",
                                        fontWeight: "700",
                                        color: "#fff",
                                        width: "100%",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        letterSpacing: "0"
                                    }
                                }
                            >
                                Iniciar sesión
                            </Button>
                        </Link>
                        <Link to="/sign-up">
                            <Button
                                variant="contained"
                                sx={
                                    {
                                        backgroundColor: "#fff",
                                        "&:hover": {
                                            backgroundColor: "#bcc0c3"
                                        },
                                        fontFamily: "Roboto",
                                        fontWeight: "600",
                                        color: "#18181c",
                                        width: "100%",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        letterSpacing: "0",
                                    }
                                }
                            >
                                Registrarse
                            </Button>
                        </Link>
                    </>
            }
        </div>
    );
}