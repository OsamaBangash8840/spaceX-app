import { getData } from "@/api";
import { LandPadsData } from "@/app/base/utils";
import React from "react";
import LandPadsList from "../LandPadsList";


const LandPadsPage = async () =>{
    const spacexData =await getData('landpads');
    const filterXdata = LandPadsData(spacexData)

    return(
        <LandPadsList data={filterXdata} />
    )

}

export default LandPadsPage;