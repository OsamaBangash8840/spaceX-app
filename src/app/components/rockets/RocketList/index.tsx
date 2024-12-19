import { Rockets } from "@/app/types/rockets";
import React from "react";
import Card from "../../common/Card";
import { Button, MImage, Typography } from "../../common";
import Link from "next/link";

const RocketList = ({data}:{data:Rockets[]}):React.ReactElement => {
    return(
        <Card
        data={data}
        title="Rockets"
        gridCols={3}
        renderItem={(item)=> {
            return(
                <Link href={`rockets/${item.id}`}>
                    <MImage
                    src={item.flickr_images[0]}
                    alt={item.name}
                    w={400}
                    h={400}
                    className=" w-[400px] h-[200px] object-cover rounded-md"
                    />
                    <Typography variant="h2" className="text-primary mt-4 mb-1">{item.name}</Typography>
                     <Typography variant="smallRegular" className="text-white mb-1">
                               {item.description && item.description.length >180 ? 
                               `${item.description.slice(0,180)}...`:
                               item.description
                    }</Typography>
                     <div className="grid grid-cols-2 ">
                           <Button href={item.wikipedia} className="mt-3">Readmore</Button>
                     </div>
                </Link>
            )
        }}
        />
    )
}

export default RocketList;