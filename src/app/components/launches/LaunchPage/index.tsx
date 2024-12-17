import { getData } from "@/api";
import { LauncheData } from "@/app/base/utils";
import React from "react";
import { LaunchList } from "../index";

const LaunchPage = async () => {
    const spacexData = await getData('launches');
    const filterXData = LauncheData(spacexData);
    return (
        <LaunchList data={filterXData}/>
    )
}

export default LaunchPage