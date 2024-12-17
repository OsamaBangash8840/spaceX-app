import React from "react";
import { MImage } from "../../../common";
import { Images } from "../../../../../../public/images";
import { NavMenu } from "../NavbarMenu";
import Link from "next/link";
import { routes } from "@/app/base/constants";

export const Navbar = (): React.ReactElement => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-[30%_70%] items-center">
            <div className="flex justify-center">
                <Link href={routes.home}>
                    <MImage 
                        src={Images.AppLogo}
                        alt="logo"
                        w={160}
                        h={120}
                        className="mx-auto mt-[-20px]"
                    />
                </Link>
            </div>
            <div className="flex justify-end mr-[60px]">
                <NavMenu />
            </div>
        </div>
    );
};
