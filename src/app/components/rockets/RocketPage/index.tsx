import { getData } from "@/api";
import { RocketsData } from "@/app/base/utils";
import React from "react";
import RocketList from "../RocketList";


const RocketPage = async () => {
    const spaceXdata = await getData('rockets');
    const filterXData = RocketsData(spaceXdata)

    return(
        <RocketList data={filterXData} />
    )
}

export default RocketPage;