import React, { Component } from 'react';

import { 
    CRow,  
    CCol,
    CInput,
    CButton,
    CForm, 
    CFormGroup,
    CInputGroup,
    CInputGroupPrepend,
    CCard,
    CCardBody, 
    CCardHeader,
    CLabel, 
} from '@coreui/react'

export default class Filter extends Component {
    render() {
        return (
            <CCard>   

                <CCardHeader><i className="fa fa-bar-chart mr-2"></i> Income List</CCardHeader>

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
                            <CLabel>Seller Name</CLabel>
                            <CInput 
                                name="SellerName" 
                                placeholder="Seller Name"
                            />
                        </CFormGroup>

                        <CFormGroup>
                            <CLabel>Date Added</CLabel>
                            <CInputGroup>
                                <CInputGroupPrepend><span className="input-group-text">From</span></CInputGroupPrepend>
                                <CInput
                                    type="date"
                                    name="DateAddedFrom" 
                                    placeholder="From"
                                />
                            </CInputGroup>
                        </CFormGroup>

                        <CFormGroup>
                            <CInputGroup>
                                <CInputGroupPrepend><span className="input-group-text">To</span></CInputGroupPrepend>
                                <CInput
                                    type="date"
                                    name="DateAddedTo" 
                                    placeholder="To"
                                />
                            </CInputGroup>
                        </CFormGroup>

                        <CFormGroup>
                            <CLabel>Seller Amount</CLabel>
                            <CRow>
                                <CCol md={6} className="pr-0">                                                       
                                    <CInputGroup>
                                        <CInputGroupPrepend><span className="input-group-text">From</span></CInputGroupPrepend>
                                        <CInput placeholder="From" name="SellerAmountFrom" />
                                    </CInputGroup>
                                </CCol>
                                <CCol md={6} className="pl-0">
                                    <CInputGroup>
                                        <CInputGroupPrepend><span className="input-group-text">To</span></CInputGroupPrepend>
                                        <CInput placeholder="To" name="SellerAmountTo"/>
                                    </CInputGroup>
                                </CCol>
                            </CRow>
                        </CFormGroup>

                        <CFormGroup>
                            <CLabel>Admin Amount</CLabel>
                            <CRow>
                                <CCol md={6} className="pr-0">                                                       
                                    <CInputGroup>
                                        <CInputGroupPrepend><span className="input-group-text">From</span></CInputGroupPrepend>
                                        <CInput placeholder="From" name="AdminAmountFrom" />
                                    </CInputGroup>
                                </CCol>
                                <CCol md={6} className="pl-0">
                                    <CInputGroup>
                                        <CInputGroupPrepend><span className="input-group-text">To</span></CInputGroupPrepend>
                                        <CInput placeholder="To" name="AdminAmountTo"/>
                                    </CInputGroup>
                                </CCol>
                            </CRow>
                        </CFormGroup>

                        <CFormGroup>
                            <CLabel>Total Amount</CLabel>
                            <CRow>
                                <CCol md={6} className="pr-0">                                                       
                                    <CInputGroup>
                                        <CInputGroupPrepend><span className="input-group-text">From</span></CInputGroupPrepend>
                                        <CInput placeholder="From" name="TotalAmountFrom" />
                                    </CInputGroup>
                                </CCol>
                                <CCol md={6} className="pl-0">
                                    <CInputGroup>
                                        <CInputGroupPrepend><span className="input-group-text">To</span></CInputGroupPrepend>
                                        <CInput placeholder="To" name="TotalAmountTo"/>
                                    </CInputGroup>
                                </CCol>
                            </CRow>
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
