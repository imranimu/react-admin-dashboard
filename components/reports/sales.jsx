import React from 'react'

import {   
    CRow,
    CCol,
    CImg
} from '@coreui/react'

import Filter from './sales/Filter'

import DataTable from './sales/DataTable'

const Sales = () => {
    return (
        
        <>
        <CRow className="mb-3">
            <CCol sm="4">                
                <Filter/>
            </CCol>

            <CCol sm="8">
                <CImg 
                    src="/images/chart01.jpg"
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

export default Sales