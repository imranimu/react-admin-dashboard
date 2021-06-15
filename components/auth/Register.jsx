import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CImg,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <div className="text-center mb-4">
                    <CImg src="/images/logo-2.png" alt="Brand Logo" width={150}/>
                  </div>
                  
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Name" autoComplete="username" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <i className="fa fa-shopping-bag"></i> 
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Shop Name" autoComplete="shop_name" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <i className="fa fa-phone"></i> 
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Phone" autoComplete="phone" />
                  </CInputGroup>                  

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-location-pin" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Address" autoComplete="address" />
                  </CInputGroup>                  

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>

                  <CButton className="mr-3" color="success">Signup</CButton>   

                  <Link to="/login">Login</Link>       

                </CForm>
              </CCardBody>

              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
