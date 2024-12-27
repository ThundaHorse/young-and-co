import React, { ReactNode } from 'react';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div
        id='header'
        style={{ position: 'sticky', top: '0', width: '100%', zIndex: '99' }}>
        <HeaderComponent />
      </div>
      <div className='flex-grow'>
        <main>{children}</main>
      </div>
      <div
        id='footer'
        className='py-4 mt-8'>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Layout;
