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
    CCardHeader, 
} from '@coreui/react'

import {Link} from 'react-router-dom'

const Orders = () => {
    return (
        
        <CCard className="mb-3">

                <CCardHeader>Orders</CCardHeader>

                <CCardBody>
                    <CForm>
                        <CFormGroup className="mb-0" row>  
                            <CCol md={8}></CCol>  

                            <CCol md={3}>
                                <CInput 
                                    name="SearchOrder" 
                                    placeholder="Search order"                                    
                                />
                            </CCol>

                            <CCol md={1}><CButton color={"info"} block>Filter</CButton></CCol>
                        </CFormGroup> 
                    </CForm>
                </CCardBody>                            

                <CCardBody className="pt-0">
                    <CRow>
                        <CCol> 
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order ID</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                        <th>Shipping Address</th>
                                        <th>Shipping Method</th>
                                        <th>Total</th> 
                                        <th className="text-center">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>1</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="success" size="sm">Completed</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>2</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="warning" size="sm">Pending</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>3</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="secondary" size="sm">On hold</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>4</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="info" size="sm">Processing</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>5</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="danger" size="sm">Cancelled</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>6</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="success" size="sm">Completed</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>7</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="warning" size="sm">Pending</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>8</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="secondary" size="sm">On hold</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>9</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="info" size="sm">Processing</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                      <tr>
                                          <td>10</td>
                                          <td>#19671</td>
                                          <td>14 July, 2020</td> 
                                          <td><CButton color="danger" size="sm">Cancelled</CButton></td>
                                          <td>47, Triyole, USA</td>  
                                          <td>Flat rate</td>
                                          <td><strong>$280</strong></td>
                                          <td className="text-center">
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-primary fa fa-pencil-square-o"></i>
                                                  </Link>
                                              </span>
                                              <span className="mr-2">
                                                  <Link to={"#"}>
                                                      <i className="text-info fa fa-file"></i>
                                                  </Link>
                                              </span>
                                              <span>
                                                  <Link to={"#"}>
                                                      <i className="text-danger fa fa-trash-o"></i>
                                                  </Link>
                                              </span>
                                          </td>
                                      </tr>                                                                     
                                  </tbody>
                              </table> 
                          </CCol>                  
                      </CRow>
                      <CRow>
                          <CCol md={5}>
                              <div className="dataTables_info">Showing 1 to 10 of 10 entries</div>
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

    )
}

export default Orders