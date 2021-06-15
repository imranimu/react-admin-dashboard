import React from 'react';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Products = React.lazy(() => import('./components/products/Products'));
const Shops = React.lazy(() => import('./components/shops/Shops'));
const Categories = React.lazy(() => import('./components/categories/categories'));
const Orders = React.lazy(() => import('./components/orders/orders'));
const Promotions = React.lazy(() => import('./components/promotions/Promotions'));
const Coupons = React.lazy(() => import('./components/coupons/coupons'));
const Messages = React.lazy(() => import('./components/messages/Messages'));

/*
## Users
************************************/
const Vendors = React.lazy(() => import('./components/users/vendor'));
const Customers = React.lazy(() => import('./components/users/customers'));

/*
## Reports
************************************/
const SalesReport = React.lazy(() => import('./components/reports/sales'));
const ProductReport = React.lazy(() => import('./components/reports/product'));
const TransactionReport = React.lazy(() => import('./components/reports/transaction'));
const IncomeReport = React.lazy(() => import('./components/reports/income'));

/*
## Settings
***********************************/
const General = React.lazy(() => import('./components/settings/general'));
const Payment = React.lazy(() => import('./components/settings/payment'));
const EmailSettings = React.lazy(() => import('./components/settings/Email'));
const CRM = React.lazy(() => import('./components/settings/CRM'));
const Unathorized = React.lazy(() => import('./components/errors/Unathorized'));

const routes = [    
  { path: '/dashboard', name: 'Dashboard', protected: 'admin', component: Dashboard },
  { path: '/products', exact: true, name: 'Products', protected: 'admin', component: Products },
  { path: '/shops', exact: true, name: 'Shops',  protected: 'admin', component: Shops },
  { path: '/categories', exact: true, name: 'Categories',  protected: 'admin', component: Categories },
  { path: '/orders', exact: true, name: 'Orders', protected: 'admin',  component: Orders },
  { path: '/promotions', exact: true, name: 'Promotions',  protected: 'admin', component: Promotions },
  { path: '/coupons', exact: true, name: 'Coupons', protected: 'admin',  component: Coupons },
  { path: '/vendors', exact: true, name: 'Vendors',  protected: 'admin', component: Vendors },
  { path: '/customers', exact: true, name: 'Customers',  protected: 'admin', component: Customers },
  { path: '/reports/sales', exact: true, name: 'Sales Report',  protected: 'admin', component: SalesReport },
  { path: '/reports/product', exact: true, name: 'Product Report',  protected: 'admin', component: ProductReport },
  { path: '/reports/transaction', exact: true, name: 'Transaction Report',  protected: 'admin', component: TransactionReport },
  { path: '/reports/income', exact: true, name: 'Income Report',  protected: 'admin', component: IncomeReport },
  { path: '/messages', exact: true, name: 'Messages',  protected: 'admin', component: Messages },
  { path: '/settings/general', exact: true, name: 'General Settings',  protected: 'admin', component: General },
  { path: '/settings/payment', exact: true, name: 'Payment Settings', protected: 'admin',  component: Payment },
  { path: '/settings/email', exact: true, name: 'Email Settings', protected: 'admin',  component: EmailSettings },
  { path: '/settings/crm', exact: true, name: 'CRM Settings', protected: 'admin',  component: CRM },
  { path: '/unathorized', exact: true, name: 'Unathorized', protected: 'admin',  component: Unathorized },

  { path: '/vendor', name: 'Dashboard', protected: 'vendor', component: Dashboard },
];

export default routes;
