import React from 'react';

const InfoCard = ({ title, tableHeaders, tableData }) => {
  return (
    <div style={{ border: '1px solid #000080', width: '300px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#000080', color: '#ffffff', padding: '10px', fontWeight: 'bold' }}>
        {title}
      </div>
      <div style={{ backgroundColor: '#e6ffe6', padding: '10px' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} style={{ paddingBottom: '10px' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoCard;
