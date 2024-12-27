'use client';

import { Footer } from 'flowbite-react';

const FooterComponent = () => {
  return (
    <Footer container>
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='w-1/5'>
            <a href='/'>
              <img
                src='/images/logo.webp'
                alt='Young and Company'
              />
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='about' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Flowbite</Footer.Link>
                <Footer.Link href='#'>Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Github</Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by='Young & Company'
            year={2024}
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
