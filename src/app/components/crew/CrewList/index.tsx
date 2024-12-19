import { Crew } from "@/app/types/crew";
import React from "react";
import { MImage, Typography } from "../../common";
import Link from "next/link";

export const CrewList = ({ data }: { data: Crew[] }): React.ReactElement => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-10">
            {data.map((item) => (
            <Link key={item.id} href={`/crew/${item.id}`}>
                <div key={item.name} className="relative group p-4 rounded shadow-md overflow-hidden">
                    <MImage
                        src={item.image}
                        alt={item.name}
                        w={300}
                        h={300}
                        className=" h-[180px] md:h-[300px] lg:h-[400px] rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    {/* Name Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Typography
                            variant="h4"
                            className="text-center text-white"
                            >
                            {item.name}
                        </Typography>
                    </div>
                </div>
            </Link>
            ))}
        </div>
    );
};
