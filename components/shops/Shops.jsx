import React from 'react'

import {  
    CRow,
    CCol,
    CInput,
    CButton,
    CForm, 
    CFormGroup,
    CCard,
    CCardBody, 
    CCardHeader
} from '@coreui/react'

import {shopsData} from '../../contexts/ShopContext'

import ShopsTable from './ShopsTable'

const Shops = () => {
    return (
        
        <CCard>                
            <CCardHeader>Shops</CCardHeader>

            <CCardBody>
                <CForm action="" method="post">
                    <CFormGroup className="mb-0" row>                                          
                        <CCol md={8}>
                            <CInput
                                type="text" 
                                name="SearchShop"
                                placeholder="Search shop" 
                            /> 
                        </CCol>  
                        
                        <CCol md={3}>
                            <select className="form-control" id="exampleFormControlSelect2">
                                    <option value="Top Sellers">Top Sellers</option>
                                    <option value="Last Sellers">Last Sellers</option>
                                    <option value="Best Rated">Best Rated</option> 
                            </select>                                 
                        </CCol>

                        <CCol md={1}><CButton color={'info'} block>Filter</CButton></CCol>
                    </CFormGroup>                         
                </CForm>                    
            </CCardBody> 

            <CCardBody className="pt-0">
                <CRow>
                    <CCol md={12}>
                        <ShopsTable
                            headers={[
                                "#",
                                <i className="fa fa-image"></i>,
                                'Shop',
                                'Owner',
                                'Email', 
                                'Phone',
                                '# Products',
                                'Last sale',
                                'Monthly sales',
                                'Action'
                            ]}
                            shopsData={shopsData}
                        />  
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
        
    )
}

export default Shops