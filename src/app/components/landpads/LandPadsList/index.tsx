import React from "react";
import Card from "../../common/Card";
import { LandPads } from "@/app/types/landpads";
import { Button, MImage, Typography } from "../../common";


const LandPadsList = ({data}:{data:LandPads[]}):React.ReactElement => {
    return(
        <Card
        title="LandPads"
        data={data}
        gridCols={3}
        renderItem={(item)=>{
            // const imageUrl = item.image?.large?.[0];
            return(
                <div>  
                <MImage
                src={item.image?.large[0]}
                alt={item.full_name}
                w={300}
                h={300}
                />
                <span className="flex items-center gap-2">
                <Typography variant="h6Light" className="text-white">{item.type},</Typography>
                <Typography variant="h2" className="text-primary mb-1"> {item.full_name}</Typography>
                </span>
                <Typography variant="h6Light" className="text-white mb-2">{item.details && item.details.length > 150 ?
                 `${item.details.slice(0,150)}...`:
                 item.details}</Typography>
                 <div className="grid grid-cols-2 ">
                     <Button href={item.wikipedia} className="mt-3">Readmore</Button>
                 </div>
                </div>
                
            )
        }}
        />
    )
}

export default LandPadsList;