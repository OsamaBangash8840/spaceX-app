import React from "react";
import { Typography } from "../Typography";

interface CardProps<T> {
  title: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  gridCols?: number; // Optional prop for grid columns (lg screens)
}

const Card = <T,>({ title, data, renderItem, gridCols = 3 }: CardProps<T>) => {
  return (
    <div>
      <Typography
        variant="h1"
        className="text-primary flex items-center justify-center mb-6"
      >
        {title}
      </Typography>
      <ul className={`grid gap-3 px-8 lg:px-40 grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols} lg:grid-cols-${gridCols}`}>
        {data.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-inputBg border border-inputBorder rounded-xl shadow-boxShadow"
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
