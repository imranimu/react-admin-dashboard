import React from 'react';
import CIcon from '@coreui/icons-react';

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Shops',
    to: '/shops',
    icon: 'cil-cursor',
  }, 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/products',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Products',
        to: '/products',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categories',
        to: '/categories',
      }       
    ],
  },
  {    
    _tag: 'CSidebarNavItem',
    name: 'Orders',
    to: '/orders',
    icon: 'cil-credit-card',     
  },
  {    
    _tag: 'CSidebarNavItem',
    name: 'Promotions',
    to: '/promotions',
    icon: 'cil-star',     
  },
  {    
    _tag: 'CSidebarNavItem',
    name: 'Coupons',
    to: '/coupons',
    icon: 'cil-code',     
  },  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/icons',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Vendors',
        to: '/vendors',        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Customers',
        to: '/customers',
      }, 
    ],
  }, 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/reports/sales',
    icon: 'cil-chart-pie',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sales',
        to: '/reports/sales',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Product',
        to: '/reports/product',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Transaction',
        to: '/reports/transaction',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Income',
        to: '/reports/income',
      }       
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Messages',
    to: '/messages',
    icon: 'cil-envelope-open',    
  }, 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settings',
    route: '/settings/general',
    icon: 'cil-input-power',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'General',
        to: '/settings/general',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Payment',
        to: '/settings/payment',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Email',
        to: '/settings/email',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CRM',
        to: '/settings/crm',
      }       
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },  
]

