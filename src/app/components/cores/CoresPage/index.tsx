import { getData } from "@/api";
import {CoresData } from "@/app/base/utils/index";
import React from "react";
import CoresList from "../CoresList";

const CoresPage = async () => {
    const spacexData = await getData('cores');
    const filterXData = CoresData(spacexData);

    return(
        <CoresList data={filterXData} />
    )
}

export default CoresPage