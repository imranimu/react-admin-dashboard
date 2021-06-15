import React from 'react'

import {   
    CRow,
    CCol
} from '@coreui/react'

import CreateVendor from './CreateVendor'
import GetVendors from './GetVendors'


const Vendors = () => {
    return (
        
        <>
        <CRow>
            <CCol sm="5">
                
                <CreateVendor/>

            </CCol>

            <CCol sm="7">
                <GetVendors/>
            </CCol>
        </CRow>
        </>

    )
}

export default Vendors