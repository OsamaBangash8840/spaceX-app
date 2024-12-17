import React from 'react';
import ListItems from '../../common/List';
import { Capsule } from '@/app/types/capsule';
import { Typography } from '../../common';

const CapsulesList = ({ data }: { data: Capsule[] }): React.ReactElement => {
  return (
    <ListItems
      title="Capsules"
      data={data}
      renderItem={(item) => (
        <div>
          <Typography className='text-primary' variant="h3">{item.type},{item.serial}</Typography>
          <Typography className='text-white mb-1 mt-4' variant="h6Light">Reuse Count : {item.reuse_count}</Typography>
          <Typography className='text-white mb-1' variant="h6Light">Water Landings : {item.water_landings}</Typography>
          <Typography className='text-white mb-1' variant="h6Light">Land Landings : {item.land_landings}</Typography>
          <Typography className={item.status === "active" ? "text-green-600" : "text-red-600"} variant="h6Light">
            Status: {item.status}
          </Typography>
          <Typography className='text-white mb-1' variant="h6Light">{item.last_update}</Typography>
        </div>
      )}
    />
  );
};

export default CapsulesList;
