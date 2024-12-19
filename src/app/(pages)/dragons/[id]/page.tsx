import { getDataById } from "@/api";
import { Button, Typography } from "@/app/components/common";
import BackButton from "@/app/components/common/BackButton";
import { DetailsCard } from "@/app/components/common/DetailsCard";
import { Dragons } from "@/app/types/dargons";
import React from "react";

const DragonDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const DragonData: Dragons = await getDataById("dragons", id);
  if (!DragonData) {
    return (
      <Typography variant="h3" className="p-8 text-red-500">
        Dragon Data not found
      </Typography>
    );
  }

  return (
    <div className="p-8">
      <DetailsCard
        data={DragonData}
        images={DragonData.flickr_images || []}
        renderDetails={(data) => (
          <>
            <Typography variant="h1" className="text-white">
              {data.name}
            </Typography>
            <Typography variant="h6" className="text-white mt-4">
              First Flight : {data.first_flight}
            </Typography>
            <div className="flex flex-col lg:flex-row mt-6 gap-4">
              {/* Left Section */}
              <div className="flex-1 p-4 rounded-lg">
                <Typography
                  variant="bodyMedium"
                  className="text-white capitalize mb-1"
                >
                  Type: {data.type}
                </Typography>
                <Typography variant="bodyMedium" className="text-white capitalize mb-1 ">Crew : {data.crew_capacity}</Typography>
                <Typography variant="bodyMedium" className="text-white capitalize mb-1">Dry Mass : {data.dry_mass_kg} Kg</Typography>
                <Typography   className="text-green-600" variant="bodyMedium"> Active </Typography>
              </div>

              {/* Right Section */}
              <div className="flex-1 bg-bg-gradientOne p-4 rounded-lg">
                <Typography
                  variant="h6"
                  className="text-white capitalize"
                >
                  Heat Shield Details:
                </Typography>
                <Typography
                  variant="bodyRegular"
                  className="text-white capitalize mt-2"
                >
                  Material: {data.heat_shield.material}
                </Typography>
                <Typography
                  variant="bodyRegular"
                  className="text-white capitalize"
                >
                  Size: {data.heat_shield.size_meters} meters
                </Typography>
                <Typography
                  variant="bodyRegular"
                  className="text-white capitalize"
                >
                  Temperature: {data.heat_shield.temp_degrees}°C
                </Typography>
              </div>
            </div>
            <Typography variant="bodyRegular" className="text-white mt-4">
               {data.description}
            </Typography>
            <div className="grid grid-cols-2 mt-4 gap-6">
              <Button href={data.wikipedia} className="mt-3">
                 <Typography variant="h6">Readmore</Typography>
              </Button>
              <BackButton/>
             </div>
          </>
        )}
      />
    </div>
  );
};

export default DragonDetail;
