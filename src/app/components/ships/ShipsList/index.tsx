import { Ships } from "@/app/types/ships";
import React from "react";
import Card from "../../common/Card";
import { MImage, Typography } from "../../common";
import Link from "next/link";

const ShipsList =({data}:{data:Ships[]}):React.ReactElement => {
    return(
        <Card
        title="Ships"
        data={data}
        gridCols={3}
        renderItem={(item)=>{
            return(
                <>
                <Link href={`ships/${item.id}`}>
                    <MImage
                    src={item.image}
                    alt={item.name}
                    w={400}
                    h={400}
                    className=" w-[400px] h-[200px] object-cover rounded-md"
                    />
                    <Typography variant="h2" className="text-primary mt-4 mb-1">{item.name}</Typography>
                    <Typography variant="h6Light" className="text-white mb-1">Port : {item.home_port}</Typography>
            </Link>
                    </>
                )
            }}
            />
    )
}

export default ShipsList;