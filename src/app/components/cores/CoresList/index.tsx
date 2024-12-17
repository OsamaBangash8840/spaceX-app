import { Cores } from "@/app/types/core";
import React from "react";
import ListItems from "../../common/List";
import { Typography } from "../../common";

const CoresList = ({data}:{data:Cores[]}):React.ReactElement =>(
    <ListItems
    title="CoresList"
    data={data}
    renderItem={(item)=>(
        <div>
            <Typography variant="h2" className="text-primary">{item.serial}</Typography>
            <Typography variant="h6Light" className="text-white mt-4">Reused Count : {item.reuse_count}</Typography>
            <Typography variant="h6Light" className="text-white mb-1">Attempts : {item.asds_attempts}</Typography>
            <Typography variant="h6Light" className="text-white mb-1">Landings : {item.rtls_landings}</Typography>
            <Typography variant="h6Light" className={item.status === "lost" ? 'text-red-600':'text-green-600'}>Status : {item.status}</Typography>
            <Typography variant="h6Light" className="text-white mb-1"  >
                {item.last_update && item.last_update.length > 50 ? `${item.last_update.slice(0, 50)}...` : item.last_update}
            </Typography>
        </div>
    )}
    />
)

export default CoresList