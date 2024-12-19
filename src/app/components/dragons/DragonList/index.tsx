import { Dragons } from "@/app/types/dargons";
import React from "react";
import Card from "../../common/Card";
import { Button, MImage, Typography } from "../../common";
import Link from "next/link";

const DragonList = ({data}:{data:Dragons[]}):React.ReactElement => {
    return(
        <div>
            <Card
            title="Dragons"
            data={data}
            gridCols={2}
            renderItem={(item)=>{
                return(
                    <Link href={`dragons/${item.id}`} className="">
                       <MImage
                       src={item.flickr_images[2]}
                        alt={item.name}
                        w={500}
                        h={500}
                        className="  md:h-[300px] lg:h-[400px] object-cover rounded-md"
                        />
                        <Typography variant="h2" className="text-white mt-4 mb-1">{item.name}</Typography>
                        <Typography variant="smallRegular" className="text-white mb-1">
                        {item.description && item.description.length >180 ? 
                        `${item.description.slice(0,180)}...`:
                         item.description}</Typography>
                        <Typography variant="h6Light" className="text-white mb-1">{item.active}</Typography>
                        <div className="grid grid-cols-2 ">
                        <Button href={item.wikipedia} className="mt-3">Readmore</Button>
                        </div>
                    </Link>
                )
            }}
            />
        </div>
    )
}
export default DragonList