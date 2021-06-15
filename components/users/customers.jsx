import React from 'react'

import {   
    CRow,
    CCol
} from '@coreui/react'

import CreateCustomer from './CreateCustomer'
import GetCustomers from './GetCustomers'

const Customers = () => {
    return (        
        <>
        <CRow>
            <CCol sm="5">
                
                <CreateCustomer/>

            </CCol>

            <CCol sm="7">
                <GetCustomers/>
            </CCol>
        </CRow>
        </>
    )
}

export default Customers