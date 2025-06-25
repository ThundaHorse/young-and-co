import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
