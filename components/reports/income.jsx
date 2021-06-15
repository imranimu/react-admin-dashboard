import React from 'react'

import {   
    CRow,
    CCol,
    CImg
} from '@coreui/react'

import Filter from './income/Filter'

import DataTable from './income/DataTable'

const Income = () => {
    return (
        
        <>
            <CRow className="mb-3">
                <CCol sm="4">                
                    <Filter/>
                </CCol>

                <CCol sm="8">
                    <CImg 
                        src="/images/chart03.jpg"
                    />
                </CCol>
            </CRow>

            <CRow>
                <CCol sm="12">
                    <DataTable />
                </CCol>
            </CRow>

        </>

    )
}

export default Income