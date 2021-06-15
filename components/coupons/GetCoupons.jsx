import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import {   
    CRow,
    CCol, 
    CCard,
    CCardBody, 
    CCardHeader, 
} from '@coreui/react'

export default class GetCoupons extends Component {
    render() {
        return (
            <CCard className="mb-3">

                <CCardHeader>Coupons</CCardHeader>

                <CCardBody>
                    <CRow>
                        <CCol> 
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="30">#</th>                                                
                                        <th>Code</th> 
                                        <th className="text-center">Coupon Type</th>
                                        <th className="text-center">Coupon Amount</th>
                                        <th className="text-center">Expiry Date</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                                         
                                        <td>1</td>                                                
                                        <td>HELLOLIVE</td> 
                                        <td className="text-center">Percentage discount</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">2020-10-25</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to="#">
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>                                                                
                                            </span>
                                        </td>                                              
                                    </tr>                                                                              
                                    <tr>                                         
                                        <td>2</td>                                                
                                        <td>HELLOLIVE</td> 
                                        <td className="text-center">Percentage discount</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">2020-10-25</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to="#">
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>                                                                
                                            </span>
                                        </td>                                              
                                    </tr>                                                                              
                                    <tr>                                         
                                        <td>3</td>                                                
                                        <td>HELLOLIVE</td> 
                                        <td className="text-center">Percentage discount</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">2020-10-25</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to="#">
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>                                                                
                                            </span>
                                        </td>                                              
                                    </tr>                                                                              
                                    <tr>                                         
                                        <td>4</td>                                                
                                        <td>HELLOLIVE</td> 
                                        <td className="text-center">Percentage discount</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">2020-10-25</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to="#">
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>                                                                
                                            </span>
                                        </td>                                              
                                    </tr>                                                                              
                                    <tr>                                         
                                        <td>5</td>                                                
                                        <td>HELLOLIVE</td> 
                                        <td className="text-center">Percentage discount</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">2020-10-25</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={'coupon-edit/'} >
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to="#">
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>                                                                
                                            </span>
                                        </td>                                              
                                    </tr>                                                                              
                                </tbody>
                            </table> 
                        </CCol>           
                    </CRow>
                    <CRow className="position-relative">
                        <CCol md={5}>
                            <div className="dataTables_info">
                                Showing 1 to 5 of 20 entries
                            </div>
                        </CCol>
                        <CCol md={7}>                             
                            <div className="dataTables_paginate text-right">
                                <ul className="pagination m-b-n m-t-n">
                                    <li className="paginate_Cbutton previous disabled">
                                        <Link to={"#"}>Previous</Link>
                                    </li>
                                    <li className="active"><Link to={"#"}>1</Link></li>
                                    <li className=""><Link to={"#"}>2</Link></li>
                                    <li className=""><Link to={"#"}>3</Link></li>
                                    <li className="paginate_Cbutton previous"><Link to={"#"}>Next</Link></li>
                                </ul>
                            </div>
                        </CCol>                        
                    </CRow>
                </CCardBody>
            </CCard>
        );
    }
}
