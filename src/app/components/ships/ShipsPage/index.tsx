import { getData } from "@/api";
import { ShipsData } from "@/app/base/utils";
import React from "react";
import ShipsList from "../ShipsList";

const ShipsPage = async () => {
    const spaceXdata = await getData('ships');
    const filterXData = ShipsData(spaceXdata);

    return <ShipsList data={filterXData}/>
}

export default ShipsPage;