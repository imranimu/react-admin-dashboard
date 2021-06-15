import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import {   
    CRow,
    CCol,
    CInput,
    CButton,
    CForm, 
    CFormGroup,
    CCard,
    CCardBody, 
    CCardHeader, 
} from '@coreui/react'

export default class GetCategories extends Component {

    
    render() {

        const CategoryImage1  = 'http://dashboard.laymoone.com/static/media/01.410fa3a6.jpg';

        return (

            <CCard className="mb-3">

                <CCardHeader>Categories</CCardHeader>

                <CCardBody>
                    <CForm>
                        <CFormGroup className="mb-0" row>    
                            <CCol md={6}></CCol>                                         
                            <CCol md={4}>
                                <CInput 
                                    name="searchCategory" 
                                    placeholder="Search categories" 
                                />
                            </CCol>
                            <CCol md={2}><CButton color={'info'} block>Filter</CButton></CCol>
                        </CFormGroup> 
                    </CForm>
                </CCardBody>                            

                <CCardBody className="pt-0">
                    <CRow>
                        <CCol> 
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="30">#</th> 
                                        <th className="text-center"><i className="fa fa-image"></i></th>                                                    
                                        <th>Name</th> 
                                        <th>Parent</th>
                                        <th className="text-center"># Products</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>                                         
                                        <td>1</td>
                                        <td className="text-center"><img src={CategoryImage1} width="45" alt="thum icon" /></td>                                                    
                                        <td>Alias</td> 
                                        <td>Kids &amp; Toy</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
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
                                        <td className="text-center"><img src={CategoryImage1} width="45" alt="thum icon" /></td>                                                    
                                        <td>Alias</td> 
                                        <td>Kids &amp; Toy</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
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
                                        <td className="text-center"><img src={CategoryImage1} width="45" alt="thum icon" /></td>                                                    
                                        <td>Alias</td> 
                                        <td>Kids &amp; Toy</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
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
                                        <td className="text-center"><img src={CategoryImage1} width="45" alt="thum icon" /></td>                                                    
                                        <td>Alias</td> 
                                        <td>Kids &amp; Toy</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
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
                                        <td className="text-center"><img src={CategoryImage1} width="45" alt="thum icon" /></td>                                                    
                                        <td>Alias</td> 
                                        <td>Kids &amp; Toy</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
                                                    <i className="text-primary fa fa-pencil-square-o"></i>
                                                </Link>
                                            </span>
                                            <span className="mr-2">
                                                <Link to={ 'category-edit/'} >
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
