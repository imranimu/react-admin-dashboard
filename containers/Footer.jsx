import React from 'react';
import { CFooter } from '@coreui/react';

const Footer = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://locta.com" target="_blank" rel="noopener noreferrer">Locta</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://exampleurl.com" target="_blank" rel="noopener noreferrer">Systway</a>
      </div>
    </CFooter>
  )
}

export default React.memo(Footer)