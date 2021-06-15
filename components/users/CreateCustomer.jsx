import React, { Component } from 'react';

import {   
    CInput,
    CButton,
    CForm, 
    CFormGroup,
    CCard,
    CCardBody, 
    CCardHeader,
    CLabel, 
} from '@coreui/react'

export default class CreateCustomer extends Component {
    render() {
        return (
            <CCard> 
                <CCardHeader>Create Customer</CCardHeader>

                <CCardBody>

                    <CForm>

                        <CFormGroup>   
                            <CLabel>Name</CLabel>                           
                            <CInput 
                                name="Name" 
                                placeholder="Name" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Personal details</CLabel>         
                            <textarea name="PersonalDetails" placeholder="Personal details" className="form-control" />    
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>Address</CLabel>                           
                            <CInput 
                                name="Address" 
                                placeholder="Address" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>                               
                            <CLabel>Phone Number</CLabel>                           
                            <CInput 
                                name="PhoneNumber" 
                                placeholder="Phone Number" 
                            />                            
                        </CFormGroup>                        

                        <CFormGroup>   
                            <CLabel>Email</CLabel>                           
                            <CInput 
                                type="email"
                                name="Email" 
                                placeholder="Email" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>Password</CLabel>                           
                            <CInput 
                                type="password"
                                name="Password" 
                                placeholder="Password" 
                            />                            
                        </CFormGroup>

                        <CFormGroup>   
                            <CLabel>Confirm Password</CLabel>                           
                            <CInput 
                                type="password"
                                name="ConfirmPassword" 
                                placeholder="Confirm Password" 
                            />                            
                        </CFormGroup>                              

                        <CFormGroup>   
                            <CLabel>Shop Name</CLabel>                           
                            <CInput 
                                name="ShopName" 
                                placeholder="Shop Name" 
                            />                            
                        </CFormGroup> 

                        <CFormGroup className="mt-4">      

                            <CButton color={'info'}>Create</CButton>

                        </CFormGroup> 
                    </CForm>
                </CCardBody>
            </CCard>
        );
    }
}
