import React from "react";
import { MImage } from "../MImage";

interface DetailsCardProps <T> {
    title?: string;
    data : T;
    className ?: string;
    images: string[];
    renderDetails : (data:T) => React.ReactNode;
}

export const DetailsCard = <T,>({data,images,renderDetails}:DetailsCardProps<T>) => {
    return(
        <div className="flex flex-col lg:flex-row gap-6 px-8 lg:px-40">
      {/* Left Side: Details */}
      <div className="flex-1">
        <div className="p-4 bg-inputBg border border-inputBorder rounded-xl shadow-boxShadow">
          {renderDetails(data)}
        </div>
      </div>

      {/* Right Side: Image / Image Gallery */}
        <div className="flex-1">
            <MImage
              src={images[0]}
              alt="Detail"
              w={300}
              h={300}
              className="w-full h-full rounded-xl object-cover"
            />

            </div>

        </div>
    )
}