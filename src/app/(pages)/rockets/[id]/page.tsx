import { getDataById } from "@/api";
import { Button, Typography } from "@/app/components/common";
import BackButton from "@/app/components/common/BackButton";
import { DetailsCard } from "@/app/components/common/DetailsCard";
import { Rockets } from "@/app/types/rockets";
import React from "react";


const RocketDetails = async ({params}:{params:{id:string}}) => {
    const {id} = await params;

    const RocketData : Rockets = await getDataById('rockets',id)
    if(!RocketData)(
        <Typography variant="h3" className="p-8 text-red-500">
                Rockets Data not found
        </Typography>

) 
        return (
            <div className="p-8">
                <DetailsCard
                data={RocketData}
                images={RocketData.flickr_images}
                renderDetails={(data)=> (
                    <>
                    <Typography variant="h1" className="text-white">{data.name}</Typography>
                    <Typography variant="h6" className="text-white capitalize mt-4 mb-1">Type : {data.type}</Typography>
                    <Typography variant="h6" className="text-white capitalize mb-1">First Flight : {data.first_flight}</Typography>
                    <div className="flex flex-col lg:flex-row mt-6 gap-4">
                                  {/* Left Section */}
                                  <div className="flex-1 p-4 rounded-lg">
                                    <Typography
                                      variant="h6Light"
                                      className="text-white capitalize mb-1"
                                    >
                                      Type: {data.type}
                                    </Typography>
                                    <Typography variant="h6Light" className="text-white capitalize mb-1 ">Cost Per  : {data.cost_per_launch}</Typography>
                                    <Typography variant="h6Light" className="text-white capitalize mb-1">Company : {data.company} Kg</Typography>
                                    <Typography variant="h6Light" className="text-white capitalize mb-1">Success Rate : {data.success_rate_pct} Kg</Typography>
                                    <Typography   className="text-green-600" variant="bodyMedium"> Active </Typography>
                                  </div>
                    
                                  {/* Right Section */}
                                  <div className="flex-1 bg-bg-gradientOne p-4 rounded-lg">
                                    <Typography
                                      variant="h6Light"
                                      className="text-white capitalize mt-2"
                                    >
                                      Country: {data.country}
                                    </Typography>
                                    <Typography
                                      variant="h6Light"
                                      className="text-white capitalize"
                                    >
                                      Stages: {data.stages} meters
                                    </Typography>
                                    <Typography variant="h6Light" className="text-white capitalize">
                                      Height: {data.height.meters} m
                                    </Typography>
                                    <Typography variant="h6Light" className="text-white capitalize">
                                      Diameter: {data.diameter.feet} f 
                                    </Typography>
                                    <Typography variant="h6Light" className="text-white capitalize">
                                      Mass: {data.mass.kg} Kg 
                                    </Typography>
                                  </div>
                    </div>
                    <Typography variant="bodyRegular" className="text-white" >{data.description}</Typography>
                     <div className="grid grid-cols-2 mt-4 gap-6">
                       <Button href={data.wikipedia} className="mt-3">
                         <Typography variant="h6">Readmore</Typography>
                        </Button>
                        <BackButton className=""/>
                      </div>
                    </>
                )}
                />
            </div>
        )
}

export default RocketDetails;