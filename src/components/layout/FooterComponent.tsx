'use client';

import { Footer } from 'flowbite-react';

const FooterComponent = () => {
  return (
    <Footer
      container
      style={{ boxShadow: 'none' }}>
      <div className='w-full text-center'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between flex flex-col'>
          <p className='mb-12 text-xs text-gray-500'>
            Any tax advice contained in this website (including any attachments)
            is not intended or written to be used, and cannot be used, for the
            purpose of (i) avoiding penalties imposed under the Internal Revenue
            Code or applicable state or local tax law or (ii) promoting,
            marketing, or recommending to another party any transaction or
            matter addressed herein.
          </p>
          <Footer.LinkGroup className='justify-center'>
            <Footer.Link href='/about'>About</Footer.Link>
            <Footer.Link href='/solutions'>Solutions</Footer.Link>
            <Footer.Link href='/contact-us'>Contact</Footer.Link>
            <Footer.Link
              href='http://youngcotax.clientportal.com/'
              target='_blank'>
              Login
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href='/'
          by='Young & Company'
          year={2024}
        />
      </div>
    </Footer>
  );
};

export default FooterComponent;
