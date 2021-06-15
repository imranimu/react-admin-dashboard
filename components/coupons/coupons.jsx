import React from 'react'

import {   
    CRow,
    CCol
} from '@coreui/react'

import CreateCoupon from './CreateCoupon'
import GetCoupons from './GetCoupons'

const Coupons = () => {
    return (        
        <>
        <CRow>
            <CCol sm="5">
                
                <CreateCoupon/>

            </CCol>

            <CCol sm="7">
                <GetCoupons/>
            </CCol>
        </CRow>
        </>
    )
}

export default Coupons