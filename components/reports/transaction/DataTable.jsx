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
                                <th>Saller Name</th>
                                <th className="text-right">Transaction Amount</th>
                                <th className="text-right">Comment</th>
                                <th className="text-right">Date Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td className="text-right">$2000.00</td>
                                <td className="text-right"></td> 
                                <td className="text-right">2020-08-15</td> 
                            </tr>                                                
                            <tr>
                                <td>John Doe</td>
                                <td className="text-right">$2000.00</td>
                                <td className="text-right"></td> 
                                <td className="text-right">2020-08-15</td> 
                            </tr>                                                
                            <tr>
                                <td>John Doe</td>
                                <td className="text-right">$2000.00</td>
                                <td className="text-right"></td> 
                                <td className="text-right">2020-08-15</td> 
                            </tr>                                                
                            <tr>
                                <td>John Doe</td>
                                <td className="text-right">$2000.00</td>
                                <td className="text-right"></td> 
                                <td className="text-right">2020-08-15</td> 
                            </tr>                                                
                            <tr>
                                <td>John Doe</td>
                                <td className="text-right">$2000.00</td>
                                <td className="text-right"></td> 
                                <td className="text-right">2020-08-15</td> 
                            </tr>                                                
                                                                            
                        </tbody>
                    </table>  
                </CCardBody>
            </CCard>
        );
    }
}
