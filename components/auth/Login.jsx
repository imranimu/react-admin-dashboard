import React, { useState, useEffect } from 'react';
//import { Link, useHistory } from 'react-router-dom';
import { Link , useHistory } from 'react-router-dom';

import AuthServices from '../../services/AuthServices'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSpinner,
  CSwitch,
  CLabel,
  CImg
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

import AuthApi from '../../api/AuthApi';

const Login = () => {
   
  const [ credentials, setCredentials ] = useState({});
  const [ errors, serErrors ] = useState("");
  const [ loading, setLoading ] = useState(false);

  let history = useHistory();

  useEffect(() => {    
    
    const isLogin = AuthServices.getAccessToken();     
    const userRole = AuthServices.isAdmin();    

    if(isLogin){

      console.log(userRole) ; 

      if(userRole){

        history.push('/dashboard');
        //window.location = '/dashboard';  

      }else{

          history.push('/vendor/dashboard');
          //window.location = '/vendor/dashboard';  

      }
    }    
  });

  const handleEmail = (e) => {

    setCredentials({
      ...credentials,
      email: e.target.value
    });

    serErrors('');
  }


  const handlePassword = (e) => {
    
    setCredentials({
      ...credentials,
      password: e.target.value
    });
    serErrors('');
  }

  const handleRemember = (e) => {
    
    setCredentials({
      ...credentials,
      remember: e.target.checked
    });
    serErrors('');
  }  

  const handleSubmit = async(e) => {

    e.preventDefault();

      setLoading(true);

      serErrors('');

      const response = await AuthApi.doLogin(credentials);

      console.log(response);

      if(response.error){

        setLoading(false);

        serErrors( response.message );

      }else{         
        
        setLoading(false);        

        if(response.results.role === 'admin'){
          
          console.log(response.results.role); 

          //history.push('/dashboard');
          window.location = '/dashboard'; 

        }else{

          //history.push('/vendor/dashboard');
          window.location = '/vendor/dashboard'; 
        }        
                
      }  
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}> 
                    <div className="text-center mb-4">
                      <CImg src="/images/logo-2.png" alt="Brand Logo" width={150}/>
                    </div>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" onChange = { handleEmail } placeholder="Email" autoComplete="Email" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" onChange ={ handlePassword }  placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                    <CSwitch onChange ={ handleRemember } name="remember" shape = "pill" variant="3d" color="primary"/>
                     <CLabel className="ml-3" htmlFor="remember">Remember Me</CLabel>
                    </CInputGroup>
                    

                    { (errors) ? <div class="alert alert-danger" role="alert">{errors} </div>: "" }                      
                      
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" type="submit" disabled={loading} className="px-4">
                          Login 
                          </CButton>
                          { (loading) ? <CSpinner color="info" size='sm' className="ml-1"/> : "" } 
                          
                        </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up as Seller</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="info" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
