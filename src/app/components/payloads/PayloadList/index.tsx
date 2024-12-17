import { Payloads } from "@/app/types/payload";
import React from "react";
import ListItems from "../../common/List";
import { Typography } from "../../common";


export const PayloadList = ({data}:{data:Payloads[]}):React.ReactElement => {
    return(
        <ListItems
        title="Payloads"
        data={data}
        renderItem={(item)=>{
            return <div>
                <Typography variant="h3" className="text-primary">{item.name},{item.type}</Typography>
                <Typography variant="h6Light" className="text-white mt-4 mb-1">Orbit : {item.orbit}</Typography>
                <Typography variant="h6Light" className="text-white mb-1">Customers : {item.customers}</Typography>
                <Typography variant="h6Light" className="text-white mb-1">Manufacturers : {item.manufacturers}</Typography>
                <Typography variant="h6Light" className="text-white mb-1">Countries : {item.nationalities}</Typography>
            </div>;
        }}
        />
    )
}