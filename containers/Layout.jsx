import React from 'react';
import Content from './Content';
import Header from './header/Header';
import Footer from './Footer';
import Sidebar from './sidebar/Sidebar';

const Layout = () => {

  return (
    <div className="c-app c-default-layout">
      <Sidebar/>
      <div className="c-wrapper">
        <Header/>
        <div className="c-body">
          <Content/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout