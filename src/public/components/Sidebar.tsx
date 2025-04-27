import { Drawer, Icon } from "@chakra-ui/react"
import { ReactNode } from "react";
import { IoMenu } from "react-icons/io5";

export function Sidebar({ children: childern }: { children: ReactNode }) {
    return (
        <Drawer.Root >
            <Drawer.Backdrop />
            <Drawer.Trigger asChild >
                <Icon className="text-white w-10 h-auto hover:cursor-pointer">
                    <IoMenu />
                </Icon>
            </Drawer.Trigger>
            <Drawer.Positioner>
                <Drawer.Content className="w-44 bg-slate-900">
                    <Drawer.Body className="flex flex-col justify-end h-full pb-10">
                        {childern}
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    )
}