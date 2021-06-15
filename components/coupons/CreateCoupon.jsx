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

export default class CreateCoupon extends Component {
    render() {
        return (
            <CCard>   

                <CCardHeader>Create Coupon</CCardHeader>

                <CCardBody>

                    <CForm>

                        <CFormGroup>   
                            <CLabel>Coupon Code</CLabel>                           
                            <CInput 
                                name="CouponCode" 
                                placeholder="Coupon Code" 
                            />                            
                        </CFormGroup>                         

                        <CFormGroup>                               
                            <CLabel>Discount Type</CLabel>              
                                        
                            <select name="DiscountType" className="form-control">        
                                <option value="">Select discount type</option>
                                <option value="Percentage discount">Percentage discount</option>
                                <option value="Fixed cart discount">Fixed cart discount</option>
                                <option value="Fixed product discount">Fixed product discount</option>
                            </select>                                                
                        </CFormGroup>   
                        
                        <CFormGroup>   
                            <CLabel>Coupon Amount</CLabel>                           
                            <CInput 
                                name="CouponAmount" 
                                placeholder="0" 
                            />                            
                        </CFormGroup>   

                        <CFormGroup>   
                            <CLabel>Coupon Expiry Date</CLabel>                           
                            <CInput 
                                type="date" name="ExpiryDate"  placeholder="date placeholder"
                            />                            
                        </CFormGroup>                      

                        <CFormGroup className="mt-4">      

                            <CButton color={'info'} size="lg">Create Coupon</CButton>

                        </CFormGroup> 
                    </CForm>
                </CCardBody>
            </CCard>
        );
    }
}
