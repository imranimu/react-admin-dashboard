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

                <CCardHeader><i className="fa fa-bar-chart mr-2"></i> Transaction List</CCardHeader>

                <CCardBody>
                    <CForm>

                        <CFormGroup>                               
                            <CLabel>Saller Name</CLabel>         
                            <select name="SallerName" className="form-control">        
                                <option value="Seller 1">Seller 1</option> 
                                <option value="Seller 2">Seller 2</option> 
                                <option value="Seller 3">Seller 3</option> 
                            </select>                                                
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>Transaction Amount</CLabel>                           
                            <CInput  
                                name="TransactionAmount" 
                                placeholder="Transaction Amount" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>Comment</CLabel>                           
                            <CInput  
                                name="Comment" 
                                placeholder="Comment" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>Date Added</CLabel>                           
                            <CInput 
                                type="date"
                                name="DateAdded" 
                                placeholder="Date Added" 
                            />                            
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
