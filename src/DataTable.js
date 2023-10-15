import React from 'react';
import './DataTable.css'
const DataTable = ({ data }) => {
  return (
   <div className='div4'>
      <table className='tab'>
      <thead>
        <tr>
          <th className='th'>Product Name</th>
          <th className='th'>Stock</th>
          <th className='th'>Price</th>
          <th className='th'>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className='td' > <div className='img3' ><img   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU'/><h5>Checking your network cables, modem, and routers</h5>   </div>  </td>
            <td className='td'>{item.column2}</td>
            <td className='td'>{item.column3}</td>
            <td className='td'>{item.column4}</td>
          </tr>
        ))}
      </tbody>
    </table> 
   </div>
  );
};

export default DataTable;
