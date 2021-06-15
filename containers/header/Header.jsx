import React from 'react';

import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

import routes from '../../routes';

import Dropdown from './Dropdown';
import Messages from './Messages';
import Notifications from './Notifications';


const Header = () => {
  

const toggleSidebar = () => {
    //const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
   // dispatch({type: 'set', sidebarShow: val})
}

const toggleSidebarMobile = () => {
  //  const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
   // dispatch({type: 'set', sidebarShow: val})
}

return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
         
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <Notifications/>
        <Messages/>
        <Dropdown/>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
      </CSubheader>
    </CHeader>
  )
}

export default Header
