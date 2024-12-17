import React from "react";
import ListItems from "../../common/List";
import { Launches } from "@/app/types/launches";
import { Typography } from "../../common";

export const LaunchList = ({data}:{data:Launches[]}):React.ReactElement => {
    return (
        <ListItems
        title="Launches"
        data={data}
        renderItem={(item)=>(
            <div>
                <Typography variant="h2" className="text-primary">{item.name}</Typography>
                <Typography variant="h6Light" className="text-white mb-1 mt-4 ">Flight Number : {item.flight_number}</Typography>
                <Typography variant="h6Light" className="text-white mb-1">Date Precision : {item.date_precision}</Typography>
                <Typography variant="h6Light" className="text-white mb-1"> {item.details && item.details.length > 70 ? `${item.details.slice(0,70)}...`:item.details}</Typography>
            </div>
        )}
        />
    )
}