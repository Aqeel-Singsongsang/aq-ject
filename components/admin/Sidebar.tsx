"use client"

import Image from "next/image";
import { adminSideBarLinks } from "@/constants";
import Link from "next/link";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

const Sidebar = ({ session }: { session: Session }) =>{
    
    const pathname = usePathname();
    
    return (
        <div className="sticky left-0 top-0 flex h-dvh flex-col justify-between bg-white px-5 pb-5 pt-10">
            <div>
                <div className="flex flex-row items-center gap-2 border-b border-dashed border-[#25388C] pb-10 max-md:justify-center">
                    <Image src="icons\admin\logo.svg" alt="logo" height={37} width={37}/>
                    <h1 className="text-2xl font-semibold text-[#25388C] max-md:hidden">KHA KHA</h1>
                </div>

                <div className="mt-10 flex flex-col gap-5">
                    {adminSideBarLinks.map((link) => {
                        const isSelected =
                        (link.route !== "/admin" &&
                            pathname.includes(link.route) &&
                            link.route.length > 1) ||
                            pathname === link.route;

                        return(
                            <Link href={link.route} key={link.route}>
                                <div
                                className={cn(
                                    "flex flex-row items-center w-full gap-2 rounded-lg px-5 py-3.5 max-md:justify-center",
                                    isSelected && "bg-[#25388C] shadow-sm ",
                                )}
                                >
                                    <div className="relative size-5">
                                        <Image
                                        src={link.img}
                                        alt="icon"
                                        fill
                                        className={`${isSelected ? "brightness-0 invert" : ""}  object-contain`}
                                        />
                                    </div>

                                    <p className={cn(isSelected ? "text-white" : "text-[#16191E]")}>
                                        {link.text}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="user">
                <Avatar>
                <AvatarFallback className="bg-amber-100">
                    {getInitials(session?.user?.name || "IN")}
                </AvatarFallback>
                </Avatar>

                <div className="flex flex-col max-md:hidden">
                <p className="font-semibold text-[#3A354E]">{session?.user?.name}</p>
                <p className="text-xs text-[#8D8D8D]">{session?.user?.email}</p>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;