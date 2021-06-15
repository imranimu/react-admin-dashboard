import React from 'react'

import {   
    CRow,
    CCol
} from '@coreui/react'

import CreateCategory from './CreateCategory'

import GetCategories from './getCategories'


const Categories = () => {
    return (
        <>
        <CRow>
            <CCol sm="6">
                
                <CreateCategory/>

            </CCol>

            <CCol sm="6">
                <GetCategories/>
            </CCol>
        </CRow>
        </>
    )
}

export default Categories