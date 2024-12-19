import { getDataById } from "@/api";
import { Typography } from "@/app/components/common";
import BackButton from "@/app/components/common/BackButton";
import { DetailsCard } from "@/app/components/common/DetailsCard";
import { LaunchPads } from "@/app/types/launchpads";
import React from "react";


const LaunchPadsDetail = async ({params}:{params:{id:string}}) => {
    const {id} = await params;

    const LaunchPadData : LaunchPads = await getDataById('launchpads',id)
    if(!LaunchPadData)(
         <Typography variant="h3" className="p-8 text-red-500">
             LaunchPads Data not found
         </Typography>
    )

    return(
        <div className="p-8">
            <DetailsCard
            data={LaunchPadData}
            images={LaunchPadData.images.large}
            renderDetails={(data)=>{
                return(
                    <>
                    <Typography variant="h2" className="text-white">{data.full_name}</Typography>
                    <Typography variant="h6" className="text-white mt-4 mb-1">{data.name}</Typography>
                    <div className="flex flex-col lg:flex-row mt-6 gap-4">
                                  {/* Left Section */}
                                  <div className="flex-1 p-4 rounded-lg">
                                    <Typography variant="bodyMedium" className="text-white capitalize mb-1 "> {data.launch_attempts} Launch Attempts</Typography>
                                    <Typography variant="bodyMedium" className="text-white capitalize mb-1"> {data.launch_successes} Successfull Launches</Typography>
                                    <Typography className={data.status === "active" ? "text-green-600 capitalize" : "text-red-600 capitalize"} variant="h6Light">
                                                Status: {data.status}
                                    </Typography>
                                  </div>
                    
                                  {/* Right Section */}
                                  <div className="flex-1 bg-bg-gradientOne p-4 rounded-lg">
                                    <Typography
                                      variant="h6"
                                      className="text-white capitalize mb-1"
                                    >
                                        Location                                    </Typography>
                                    <Typography
                                      variant="bodyRegular"
                                      className="text-white capitalize mb-1 "
                                    >
                                      Localtiy: {data.locality}
                                    </Typography>
                                    <Typography
                                      variant="bodyRegular"
                                      className="text-white capitalize mb-1"
                                    >
                                      Region : {data.region}
                                    </Typography>
                                  </div>
                    </div>
                    <Typography variant="bodyRegular" className="mt-4 text-white">{data.details}</Typography>
                     <div className="grid grid-cols-2 mt-4">
                    <BackButton className="mt-3"/>
                     </div>
                    </>
                )
            }}
            />
        </div>
    )
}

export default LaunchPadsDetail;