import React from 'react';

import {CImg} from '@coreui/react';

import {Link} from 'react-router-dom'

const productsTable = ({ headers, productsData }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {productsData.map(({ 
            id,
            image,
            Title,
            Shop,
            Price,
            Stock,      
            Ratings,
            TotalSell,
            LastUpdate
        }, index) => (
            <tr key={index}>
                <td className="text-center">{id}</td>
                <td className="text-center">
                    <CImg
                        object="true"
                        src={image} 
                        style={{ width: 75 }}
                    />
                </td>
                <td>{Title}</td>
                <td>{Shop}</td>
                <td className="text-center">{Price}</td>
                <td className="text-center">{Stock} <span className="btn btn-warning btn-sm CustomSmallButton">Low</span></td>
                <td className="text-center">
                    <Link to={"#"}>
                        <i className="fa fa-star starGolden"></i>
                        <i className="fa fa-star starGolden"></i>
                        <i className="fa fa-star starGray"></i>
                        <i className="fa fa-star starGray"></i>
                        <i className="fa fa-star starGray"></i>
                    </Link>({Ratings})</td>
                <td className="text-center">{TotalSell}</td>
                <td className="text-center">{LastUpdate}</td>
                <td className="text-center">
                    <span className="mr-2"><Link to={"#"}><i className="text-primary fa fa-pencil-square-o"></i></Link></span>
                    <span className="mr-2"><Link to={"#"}><i className="text-info fa fa-file"></i></Link></span>
                    <span><Link to={"#"}><i className="text-danger fa fa-trash-o"></i></Link></span>
                </td>
            </tr>                
        ))}
      </tbody>
    </table>
  );
};

export default productsTable;