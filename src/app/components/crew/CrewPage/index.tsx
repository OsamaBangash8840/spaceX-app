import { getData } from "@/api";
import { CrewData } from "@/app/base/utils";
import React from "react";
import { CrewList } from "../CrewList";


export const CrewPage = async () => {
    const spaceXdata = await getData('crew');
    const filterXdata = CrewData(spaceXdata);

    return(
        <CrewList data={filterXdata}/>
    )
}