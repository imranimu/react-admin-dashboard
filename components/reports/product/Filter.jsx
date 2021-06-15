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
