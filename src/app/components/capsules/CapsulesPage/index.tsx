import React from 'react';
import { getData } from '@/api';
import { CapsulesData } from '@/app/base/utils';
import CapsulesList from '@/app/components/capsules/CapsulesList';

const CapsulesPage = async () => {
  const spacexData = await getData('capsules'); 
  const filterXdata = CapsulesData(spacexData); 

  return (
    <div>
      <CapsulesList data={filterXdata} />
    </div>
  );
};

export default CapsulesPage;
