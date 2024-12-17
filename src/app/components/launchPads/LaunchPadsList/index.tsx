import { LaunchPads } from "@/app/types/launchpads";
import React from "react";
import Card from "../../common/Card";
import { MImage, Typography } from "../../common";

const LaunchPadsList = ({data}:{data:LaunchPads[]}):React.ReactElement => {
    return(
        <Card
        title="LaunchPads"
        data={data}
        gridCols={3}
        renderItem={(item)=> {
            return(
                <div>
                    <MImage
                    src={item.images.large[0]}
                    alt={item.name}
                    w={400}
                    h={400}
                    className=" w-[400px] h-[200px] object-cover rounded-md"
                    />
                    <Typography variant="h2" className="text-primary mt-4 mb-1">{item.name}</Typography>
                    <Typography variant="smallRegular" className="text-white mt-2 mb-1">
                          {item.details && item.details.length >180 ? 
                           `${item.details.slice(0,180)}...`:
                             item.details
                    }</Typography>
                </div>
            )
        }}
        />
    )
}

export default LaunchPadsList;