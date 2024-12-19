import React from "react";
import { Typography } from "../Typography";

interface ListItemsProps<T> {
  title: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  className ?: string;
}

const ListItems = <T,>({ title, data, renderItem }: ListItemsProps<T>) => {
  return (
    <div>
      <Typography variant="h1" className="text-primary flex items-center justify-center mb-6">{title}</Typography>
      <ul className=" gap-x-6 gap-y-4 grid md:grid-cols-3 lg:grid-cols-4 lg:px-20 px-8">
        {data.map((item, index) => (
          <li key={index} className=" p-4 bg-inputBg lg:w-[280px] border border-inputBorder rounded-xl shadow-boxShadow">
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
