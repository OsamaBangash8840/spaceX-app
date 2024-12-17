import { getData } from "@/api";
import { PayloadData } from "@/app/base/utils";
import React from "react";
import { PayloadList } from "../PayloadList";

export const PayloadPage = async () => {
    const spaceXData = await getData('payloads');
    const filterXdata = PayloadData(spaceXData)
    return(
        <PayloadList data={filterXdata}/>
    )
}