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
                                <th>Seller Name</th>
                                <th>Total Amount</th>
                                <th>Seller Amount</th>
                                <th>Admin Amount</th>
                                <th>Paid Amount</th>
                                <th>Ramaining Amount</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Due</td>
                                <td>$15,200.00</td>
                                <td>$12,000.00</td>
                                <td>$14,000.00</td>
                                <td>$13,000.00</td>
                                <td>$95.00</td>                           
                            </tr>                                                
                            <tr>
                                <td>John Due</td>
                                <td>$15,200.00</td>
                                <td>$12,000.00</td>
                                <td>$14,000.00</td>
                                <td>$13,000.00</td>
                                <td>$95.00</td>                           
                            </tr>                                                
                            <tr>
                                <td>John Due</td>
                                <td>$15,200.00</td>
                                <td>$12,000.00</td>
                                <td>$14,000.00</td>
                                <td>$13,000.00</td>
                                <td>$95.00</td>                           
                            </tr>                                                
                            <tr>
                                <td>John Due</td>
                                <td>$15,200.00</td>
                                <td>$12,000.00</td>
                                <td>$14,000.00</td>
                                <td>$13,000.00</td>
                                <td>$95.00</td>                           
                            </tr>                                                
                            <tr>
                                <td>John Due</td>
                                <td>$15,200.00</td>
                                <td>$12,000.00</td>
                                <td>$14,000.00</td>
                                <td>$13,000.00</td>
                                <td>$95.00</td>                           
                            </tr>                                                
                            <tr>
                                <td>John Due</td>
                                <td>$15,200.00</td>
                                <td>$12,000.00</td>
                                <td>$14,000.00</td>
                                <td>$13,000.00</td>
                                <td>$95.00</td>                           
                            </tr>                                           
                        </tbody>
                    </table>  
                </CCardBody>
            </CCard>
        );
    }
}
