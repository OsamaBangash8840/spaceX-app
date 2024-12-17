import { getData } from "@/api";
import { DragonData } from "@/app/base/utils";
import React from "react";
import DragonList from "../DragonList";

const DragonPage = async () => {
    const spacexData = await getData('dragons');
    const filterXData = DragonData(spacexData);

    return(
        <div className="mb-5">
            <DragonList data={filterXData}/>
        </div>
    )
}

export default DragonPage;