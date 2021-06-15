import React from 'react';

import {CImg} from '@coreui/react';

const ShopsTable = ({ headers, shopsData }) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr className="text-capitalize align-middle text-center">
            {headers.map((item, index) => <th key={index}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {shopsData.map(({ 
              id,
              image,
              shopName,
              Owner,
              Email,
              Phone,      
              NbProducts,
              LastSale,
              MonthlySales    
          }, index) => (
              <tr key={index}>
                  <td>{id}</td>
                  <td className="text-center">                    
                      <CImg
                          object="true"
                          src={image} 
                          style={{ width: 50, height: 50 }}
                      />
                  </td>
                  <td>{shopName}</td>
                  <td>{Owner}</td>
                  <td><a href={`mailto:${Email}`}>{Email}</a></td>
                  <td>{Phone}</td>
                  <td className="text-center">{NbProducts}</td>
                  <td className="text-center">{LastSale}</td>
                  <td className="text-center">{MonthlySales}</td>
                  <td className="text-center">
                      <span className="mr-2">
                          <a href={`/shop-details/${id}`}><i className="text-info fa fa-file"></i></a>
                      </span>
                      <span><a href="/shops"><i className="text-danger fa fa-trash-o"></i></a></span>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>      
    </>
  );
};

export default ShopsTable;