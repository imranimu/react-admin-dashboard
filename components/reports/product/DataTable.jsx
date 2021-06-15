import React, { Component } from 'react';

import {CCard, CCardBody} from '@coreui/react'

export default class DataTable extends Component {
    render() {
        return (
            <CCard className="mb-3">
                <CCardBody>
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th className="text-right">Sold Quantity</th>
                                <th className="text-right">Revenue</th>
                                <th className="text-right">Seller Revenue</th> 
                                <th className="text-right">Commission</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vivo Y50 8GB/128GB</td>
                                <td className="text-right">10</td>
                                <td className="text-right">$2000.00</td> 
                                <td className="text-right">$0.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>DMX2 Plus Smart Mobile</td>
                                <td className="text-right">10</td>
                                <td className="text-right">$2000.00</td> 
                                <td className="text-right">$0.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>Walton Primo H9 (3GB/32GB)</td>
                                <td className="text-right">10</td>
                                <td className="text-right">$2000.00</td> 
                                <td className="text-right">$0.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>Apple iPhone 6s plus</td>
                                <td className="text-right">10</td>
                                <td className="text-right">$2000.00</td> 
                                <td className="text-right">$0.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>Apple iPhone X</td>
                                <td className="text-right">10</td>
                                <td className="text-right">$2000.00</td> 
                                <td className="text-right">$0.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                 
                                                                            
                        </tbody>
                    </table>  
                </CCardBody>
            </CCard>
        );
    }
}
