import React from 'react';
import InfoCard from './components/InfoCard';

const App = () => {
  const certificateData = {
    title: 'Issue Certificate Summary',
    tableHeaders: ['Year', 'Issue Certificate'],
    tableData: [
      ['Till Date', '29,18,86,228'],
      ['2024', '4,93,77,345'],
      ['2023', '7,25,29,805'],
      ['2022', '6,48,04,605'],
      ['2021', '5,41,74,496'],
      ['2020', '3,46,49,947'],
      ['2019', '1,63,50,030']
    ]
  };

  const vehiclesDetectedData = {
    title: 'Number of Vehicles Detected Per Year',
    tableHeaders: ['Year', 'Vehicles Detected'],
    tableData: [
      ['2024', '8,20,000'],
      ['2023', '7,50,000'],
      ['2022', '6,80,000'],
      ['2021', '5,90,000'],
      ['2020', '5,00,000'],
      ['2019', '4,30,000']
    ]
  };

  const expiredPUCData = {
    title: 'Number of Vehicles with Expired PUC',
    tableHeaders: ['Year', 'Expired PUC Vehicles'],
    tableData: [
      ['2024', '1,20,000'],
      ['2023', '1,05,000'],
      ['2022', '95,000'],
      ['2021', '80,000'],
      ['2020', '70,000'],
      ['2019', '60,000']
    ]
  };

  const penalizedData = {
    title: 'Number of Vehicles Penalized for Expired PUC',
    tableHeaders: ['Year', 'Penalized Vehicles'],
    tableData: [
      ['2024', '50,000'],
      ['2023', '45,000'],
      ['2022', '40,000'],
      ['2021', '35,000'],
      ['2020', '30,000'],
      ['2019', '25,000']
    ]
  };

  const vehicleTypeData = {
    title: 'Number of Private and Public Vehicles Detected',
    tableHeaders: ['Vehicle Type', 'Count'],
    tableData: [
      ['Private', '5,00,000'],
      ['Public', '3,20,000']
    ]
  };

  const goodsCarrierData = {
    title: 'Number of Goods Carrier Vehicles Detected Per Year',
    tableHeaders: ['Year', 'Goods Carrier Vehicles'],
    tableData: [
      ['2024', '2,00,000'],
      ['2023', '1,80,000'],
      ['2022', '1,60,000'],
      ['2021', '1,40,000'],
      ['2020', '1,20,000'],
      ['2019', '1,00,000']
    ]
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 33%', boxSizing: 'border-box', padding: '10px' }}>
        <InfoCard
          title={certificateData.title}
          tableHeaders={certificateData.tableHeaders}
          tableData={certificateData.tableData}
        />
      </div>
      <div style={{ flex: '1 1 33%', boxSizing: 'border-box', padding: '10px' }}>
        <InfoCard
          title={vehiclesDetectedData.title}
          tableHeaders={vehiclesDetectedData.tableHeaders}
          tableData={vehiclesDetectedData.tableData}
        />
      </div>
      <div style={{ flex: '1 1 33%', boxSizing: 'border-box', padding: '10px' }}>
        <InfoCard
          title={expiredPUCData.title}
          tableHeaders={expiredPUCData.tableHeaders}
          tableData={expiredPUCData.tableData}
        />
      </div>
      <div style={{ flex: '1 1 33%', boxSizing: 'border-box', padding: '10px' }}>
        <InfoCard
          title={penalizedData.title}
          tableHeaders={penalizedData.tableHeaders}
          tableData={penalizedData.tableData}
        />
      </div>
      <div style={{ flex: '1 1 33%', boxSizing: 'border-box', padding: '10px' }}>
        <InfoCard
          title={vehicleTypeData.title}
          tableHeaders={vehicleTypeData.tableHeaders}
          tableData={vehicleTypeData.tableData}
        />
      </div>
      <div style={{ flex: '1 1 33%', boxSizing: 'border-box', padding: '10px' }}>
        <InfoCard
          title={goodsCarrierData.title}
          tableHeaders={goodsCarrierData.tableHeaders}
          tableData={goodsCarrierData.tableData}
        />
      </div>
    </div>
  );
};

export default App;
