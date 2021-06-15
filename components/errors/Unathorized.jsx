import React from 'react'

import {
    CContainer, 
    CRow,
    CCol
} from '@coreui/react'

const Unathorized = () => {
    return (
        <CContainer fluid>
            <CRow>
                <CCol sm="6">
                    <h2>You are not athotized to access this page. </h2>
                </CCol>           
            </CRow>
        </CContainer>
      );
}
 
export default Unathorized;