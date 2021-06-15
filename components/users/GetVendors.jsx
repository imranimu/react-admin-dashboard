import userImage1 from 'assets/img/users/100_4.jpg';
import userImage2 from 'assets/img/users/100_7.jpg';
import userImage3 from 'assets/img/users/100_8.jpg';
import userImage4 from 'assets/img/users/100_9.jpg';
import userImage5 from 'assets/img/users/100_5.jpg';

import React, { Component } from 'react';

import {   
    CRow,
    CCol, 
    CCard,
    CCardBody, 
    CCardHeader, 
} from '@coreui/react'

import {Link} from 'react-router-dom'

export default class GetVendors extends Component {
    render() {
        return (
            <CCard className="mb-3">

                <CCardHeader>Vendors</CCardHeader>                          

                <CCardBody className="pt-0">
                    <CRow>
                        <CCol> 
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th className="text-center"><i className="fa fa-image"></i></th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Shop Name</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className="text-center"><img src={userImage1} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="text-center"><img src={userImage2} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="text-center"><img src={userImage3} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className="text-center"><img src={userImage4} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td className="text-center"><img src={userImage5} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>                                                                               
                                    <tr>
                                        <td>6</td>
                                        <td className="text-center"><img src={userImage1} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td className="text-center"><img src={userImage2} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td className="text-center"><img src={userImage3} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td className="text-center"><img src={userImage4} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td className="text-center"><img src={userImage5} width="45" alt="Vendor Profile thum." /></td>
                                        <td>Mark Due</td> 
                                        <td>45, Nile, USA</td>
                                        <td>+xxx xxx xxx</td>
                                        <td>test@admin.com</td>
                                        <td>Zopex</td> 
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={"#"}>
                                                    <i className="text-info fa fa-file"></i>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={"#"}>
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
                                Showing 1 to 10 of 30 entries
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
