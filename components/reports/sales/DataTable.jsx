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
                                <th>Date</th>
                                <th className="text-right">No. of Orders</th>
                                <th className="text-right">No. of Products</th>
                                <th className="text-right">Total Revenue</th> 
                                <th className="text-right">Seller Revenue</th> 
                                <th className="text-right">Commission</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2020-08-11</td>
                                <td className="text-right">10</td>
                                <td className="text-right">20</td> 
                                <td className="text-right">$2,800.00</td>
                                <td className="text-right">$2,030.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>2020-08-11</td>
                                <td className="text-right">10</td>
                                <td className="text-right">20</td> 
                                <td className="text-right">$2,800.00</td>
                                <td className="text-right">$2,030.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>2020-08-11</td>
                                <td className="text-right">10</td>
                                <td className="text-right">20</td> 
                                <td className="text-right">$2,800.00</td>
                                <td className="text-right">$2,030.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>2020-08-11</td>
                                <td className="text-right">10</td>
                                <td className="text-right">20</td> 
                                <td className="text-right">$2,800.00</td>
                                <td className="text-right">$2,030.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>2020-08-11</td>
                                <td className="text-right">10</td>
                                <td className="text-right">20</td> 
                                <td className="text-right">$2,800.00</td>
                                <td className="text-right">$2,030.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                            <tr>
                                <td>2020-08-11</td>
                                <td className="text-right">10</td>
                                <td className="text-right">20</td> 
                                <td className="text-right">$2,800.00</td>
                                <td className="text-right">$2,030.00</td>
                                <td className="text-right">$2,200.00</td>
                            </tr>                                                
                                                                            
                        </tbody>
                    </table>  
                </CCardBody>
            </CCard>
        );
    }
}
