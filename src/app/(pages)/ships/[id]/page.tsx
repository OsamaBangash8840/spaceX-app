import { getDataById } from "@/api";
import { Button, Typography } from "@/app/components/common";
import BackButton from "@/app/components/common/BackButton";
import { DetailsCard } from "@/app/components/common/DetailsCard";
import { Ships } from "@/app/types/ships";
import React from "react";

const ShipsDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const ShipsData: Ships = await getDataById("ships", id);

  if (!ShipsData) {
    return (
      <Typography variant="h3" className="p-8 text-red-500">
        Ships Data not found
      </Typography>
    );
  }

  return (
    <div className="p-8">
      <DetailsCard
        data={ShipsData}
        images={Array.isArray(ShipsData.image) ? ShipsData.image : [ShipsData.image]} // Wrap in an array
        renderDetails={(data) => (
          <>
            <Typography variant="h1" className="text-white">
              {data.name}
            </Typography>
            <Typography variant="bodyRegular" className="text-white mt-4 mb-1">Manufactured Year : {data.year_built}</Typography>
            <Typography variant="bodyRegular" className="text-white mb-1">Mass : {data.mass_kg} Kg</Typography>
             <Typography className={data.status === "active" ? "text-green-600 capitalize" : "text-red-600 capitalize"} variant="h6Light">
              Status: {data.status}
              </Typography>
            <Typography variant="bodyRegular" className="text-white mb-1">Home Port : {data.home_port}</Typography>
            <div className="grid grid-cols-2 mt-4 gap-6">
               <Button href={data.link} className="mt-3">
                 <Typography variant="h6">Readmore</Typography>
              </Button>
               <BackButton className=""/>
                </div>
          </>
        )}
      />
    </div>
  );
};

export default ShipsDetail;
