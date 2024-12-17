import React from "react";
import ListItems from "../../common/List";
import { Typography } from "../../common";
import { StarLink } from "@/app/types/starlink";

const StarLinkList = ({ data }: { data: StarLink[] }): React.ReactElement => {
    return (
        <ListItems
            title="StarLink"
            data={data}
            renderItem={(item) => (
                <div>
                    <span className="flex items-center gap-2">
                         <Typography variant="h3" className="text-primary mb-1">
                              {item.spaceTrack.OBJECT_NAME},
                         </Typography>
                         <Typography variant="h6Light" className="text-secondary">
                                 {item.version}
                          </Typography>
                    </span>
                    <Typography variant="h6Light" className="text-white mt-4 mb-1">Launch Date : {item.spaceTrack.LAUNCH_DATE}</Typography>
                    <Typography variant="h6Light" className="text-white mb-1"> Size : {item.spaceTrack.RCS_SIZE}</Typography>
                    <Typography variant="h6Light" className="text-white mb-1">Theory : {item.spaceTrack.MEAN_ELEMENT_THEORY}</Typography>
                    <Typography variant="h6Light" className="text-white mb-1">Originator : {item.spaceTrack.ORIGINATOR}</Typography>
                    <Typography variant="h6Light" className="text-white mb-1">Country Code : {item.spaceTrack.COUNTRY_CODE}</Typography>
                    <Typography variant="ExtraSmallRegular" className="text-white mb-1">{item.spaceTrack.COMMENT}</Typography>
                </div>
            )}
        />
    );
};

export default StarLinkList;
