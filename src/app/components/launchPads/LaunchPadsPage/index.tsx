import { getData } from "@/api";
import { LaunchPadsData } from "@/app/base/utils";
import React from "react";
import LaunchPadsList from "../LaunchPadsList";

const LaunchPadsPage = async () =>{
    const spaceXdata = await getData('launchpads');
    const filterXData = LaunchPadsData(spaceXdata);

    return (
        <LaunchPadsList data={filterXData}/>
    )
}

export default LaunchPadsPage;