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

import {Link} from 'react-router-dom'

import {productsData} from '../../contexts/ProductsContext'

import ProductsTable from './ProductsTable'

const Products = () => {
    return (
        <>
            <CCard>                
                <CCardHeader>Products</CCardHeader>

                <CCardBody>
                    <CForm>
                        <CFormGroup className="mb-0" row>  
                            <CCol md={3}>
                                <CInput 
                                    name="SearchProduct" 
                                    placeholder="Search Product" 
                                />
                            </CCol>  
                            <CCol md={2}>
                                <select type="select" className="form-control" name="SearchShop">
                                    <option value="">Search by Shop</option>
                                    <option value="Jone Shop">Jone Shop</option>
                                    <option value="Best Rated">Due Shop</option> 
                                    <option value="Best Rated">Due Shop</option> 
                                </select>
                            </CCol>                                         
                            <CCol md={2}>
                                <select type="select" className="form-control" name="TopSellers">
                                    <option value="Top Sellers">Top Sellers</option>
                                    <option value="Last Sellers">Last Sellers</option>
                                    <option value="Best Rated">Best Rated</option> 
                                </select>
                            </CCol>                                         
                            <CCol md={2}>
                                <select type="select" className="form-control" name="StockStatus">
                                    <option value="">Search by Stock</option>
                                    <option value="instock">In stock</option>
                                    <option value="outofstock">Out of stock</option>
                                    <option value="onbackorder">On backorder</option>
                                    <option value="LowStock">Low Stock</option>
                                </select>
                            </CCol> 
                            <CCol md={2}>
                                <select type="select" className="form-control" name="SearchBySell">
                                    <option value="">Search by Sell</option>
                                    <option value="Top Sells">Top Sells</option>
                                    <option value="Best Rated">Best Rated</option>
                                    <option value="Last Sold">Last Sold</option> 
                                    <option value="Low Sales">Low Sales</option> 
                                </select>
                            </CCol> 
                            <CCol md={1}><CButton color={'info'} block>Filter</CButton></CCol>
                        </CFormGroup> 
                    </CForm>
                </CCardBody>                 

                <CCardBody className="pt-0">
                    <CRow>
                        <CCol md={12}>
                            <ProductsTable
                                headers={[
                                    "#",
                                    <i className="fa fa-image"></i>,
                                    'Title',
                                    'Shop',
                                    'Price', 
                                    'Stock',
                                    'Ratings',
                                    'Total Sell',
                                    'Last Update',
                                    'Action'
                                ]}
                                productsData={productsData}
                            />  
                        </CCol>
                    </CRow>

                    <CRow className="position-relative">
                        <CCol md={5}>
                            <div className="dataTables_info">
                                Showing 1 to 10 of 20 entries
                            </div>
                        </CCol>
                        <CCol md={7}>                             
                            <div className="dataTables_paginate text-right">
                                <ul className="pagination m-b-n m-t-n">
                                    <li className="paginate_Cbutton previous disabled">
                                        <Link to={"#"}>Previous</Link>
                                    </li>
                                    <li className="active"><Link to={"#"}>1</Link></li>
                                    <li className=""><Link to={"#"}>2</Link></li>
                                    <li className=""><Link to={"#"}>3</Link></li>
                                    <li className="paginate_Cbutton previous"><Link to={"#"}>Next</Link></li>
                                </ul>
                            </div>
                        </CCol>                        
                    </CRow>
                </CCardBody>
            </CCard> 
        </>
    )
}

export default Products