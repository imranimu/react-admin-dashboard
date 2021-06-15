import React, { Component } from 'react';

import {   
    CCol,
    CInput,
    CButton,
    CForm, 
    CFormGroup,
    CCard,
    CCardBody, 
    CCardHeader,
    CLabel, 
} from '@coreui/react'

export default class Filter extends Component {
    render() {
        return (
            <CCard>   

                <CCardHeader><i className="fa fa-bar-chart mr-2"></i> Products List</CCardHeader>

                <CCardBody>
                    <CForm>

                        <CFormGroup>                               
                            <CLabel>Report Type</CLabel>         
                            <select name="ReportType" className="form-control">        
                                <option value="Product By Quantity">Product By Quantity</option>
                                <option value="Product By Revenue">Product By Revenue</option>
                                <option value="Product By Seller">Product By Seller</option>
                                <option value="Product By Commission">Product By Commission</option>
                            </select>                                                
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>Start Date</CLabel>                           
                            <CInput 
                                type="date"
                                name="StartDate" 
                                placeholder="Start Date" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>End Date</CLabel>                           
                            <CInput 
                                type="date"
                                name="EndDate" 
                                placeholder="End Date" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Product</CLabel>         
                            <select name="Product" className="form-control">        
                                <option value="All">All Products</option>
                                <option value="Vivo Y50 8GB/128GB">Vivo Y50 8GB/128GB</option>
                                <option value="DMX2 Plus Smart Mobile">DMX2 Plus Smart Mobile</option>
                                <option value="Walton Primo H9 (3GB/32GB)">Walton Primo H9 (3GB/32GB)</option>
                                <option value="Apple iPhone 6s plus">Apple iPhone 6s plus</option>
                                <option value="Apple iPhone X">Apple iPhone X</option>
                            </select>                                                
                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Group By</CLabel>         
                            <select name="GroupBy" className="form-control">        
                                <option value="Days">Days</option>
                                <option value="Week">Week</option>
                                <option value="Month">Month</option>
                                <option value="Year">Year</option>  
                            </select>                                                
                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Order Status</CLabel>         
                            <select name="OrderStatus" className="form-control">        
                                <option value="">All Statuses</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option> 
                            </select>                                                
                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Seller</CLabel>         
                            <select name="Seller" className="form-control">        
                                <option value="">All Sellers</option>
                                <option value="Product By Revenue">Top Seller</option>
                                <option value="Product By Seller">Lowest Seller</option>
                            </select>                                                
                        </CFormGroup>

                        <CFormGroup row className="mt-3">                                 
                            <CCol md={6}>                                                       
                                <CButton color="danger">Clear</CButton>
                            </CCol>
                            <CCol md={6} className="text-right">
                                <CButton color="info"><i className="fa fa-search"></i> Search</CButton>
                            </CCol>
                        </CFormGroup>

                    </CForm>
                </CCardBody>
            </CCard>
        );
    }
}
