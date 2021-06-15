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
    CFormText
} from '@coreui/react'

export default class CreateVendor extends Component {

    constructor() {
        super();    
        this.state = {   
            VendorImage: null,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            VendorImage: URL.createObjectURL(event.target.files[0])
        })
    } 

    render() {
        return (
            <CCard>   

                <CCardHeader>Create Vendor</CCardHeader>

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

                        <div className="multi-preview VendorImage">
                            {this.state.VendorImage ? (
                                <img src={this.state.VendorImage} alt="Vendor thum"/>
                            ) : ( '' )}                                    
                        </div>

                        <CFormGroup className="mb-4 position-relative">
                            <CLabel>Profile Photo</CLabel>
                            <span className="btn btn-secondary UploadCustom btn-sm"><i className="fa fa-upload"></i> Upload Image</span>
                            <CInput type="file" name="ProfilePhoto" onChange={this.handleChange} />
                            <CFormText color="muted">Set Profile Photo.</CFormText> 
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
