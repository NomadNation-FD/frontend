import { Drawer, Icon } from "@mui/material";
import { ReactNode } from "react";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export function Sidebar({ children: childern }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);

    return (
        <>
            <Icon
                fontSize="large"
                className="text-white hover:cursor-pointer"
                onClick={handleToggle}
            >
                <IoMenu />
            </Icon>
            <Drawer
                open={open}
                onClose={handleToggle}
                anchor="right"
            >
                <div className="w-fit px-5 h-full bg-[#20252a] flex flex-col justify-end pb-10">
                    {childern}
                </div>
            </Drawer>
        </>
    )
}