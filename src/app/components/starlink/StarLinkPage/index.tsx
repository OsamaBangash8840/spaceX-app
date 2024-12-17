import { getData } from "@/api";
import { Typography } from "../../common";
import StarLinkList from "../StarLinkList";
import { StarLinkData } from "@/app/base/utils";

const StarLinkPage = async () => {
    const spaceXData = await getData('starlink');
    // console.log("Fetched Data:", spaceXData);
    
    const filterXdata = StarLinkData(spaceXData);
    // console.log("Filtered Data:", filterXdata);

    return (
        <div>
            {filterXdata.length > 0 ? (
                <StarLinkList data={filterXdata} />
            ) : (
                <Typography>No data available</Typography>
            )}
        </div>
    );
};

export default StarLinkPage;
