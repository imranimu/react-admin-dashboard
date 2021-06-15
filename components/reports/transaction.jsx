import React from 'react'

import {   
    CRow,
    CCol,
    CImg
} from '@coreui/react'

import Filter from './transaction/Filter'

import DataTable from './transaction/DataTable'

const Transaction = () => {
    return (
        
        <>
            <CRow className="mb-3">
                <CCol sm="4">                
                    <Filter/>
                </CCol>

                <CCol sm="8">
                    <CImg 
                        src="/images/chart04.jpg"
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

export default Transaction