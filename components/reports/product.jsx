import React from 'react'

import {   
    CRow,
    CCol,
    CImg
} from '@coreui/react'

import Filter from './product/Filter'

import DataTable from './product/DataTable'

const Product = () => {
    return (
        
        <>
            <CRow className="mb-3">
                <CCol sm="4">                
                    <Filter/>
                </CCol>

                <CCol sm="8">
                    <CImg 
                        src="/images/chart02.jpg"
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

export default Product