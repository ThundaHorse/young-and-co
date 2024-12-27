'use client';

import { Button, MegaMenu, Navbar } from 'flowbite-react';

const products = [
  {
    name: 'Our Company',
    description: 'Our Company',
    href: '/our-company',
  },
  {
    name: 'Guides',
    description: 'Guides Page',
    href: '/guides',
  },
  {
    name: 'Contact',
    description: 'Contact Page',
    href: '/contact-us',
  },
];

const solutionOptions = [
  {
    name: 'Tax Filing',
    id: 'tax-filing',
    description: 'Lorem Ipsum Dalor Valor Epsilon',
  },
  {
    name: 'Tax Strategy & Planning',
    id: 'tax-strategy-and-planning',
    description: 'Lorem Ipsum Dalor Valor Epsilon',
  },
  {
    name: 'Bookkeeping & Accounting',
    id: 'bookkeeping-and-accounting',
    description: 'Lorem Ipsum Dalor Valor Epsilon',
  },
  {
    name: 'Business Formation',
    id: 'business-formation',
    description: 'Lorem Ipsum Dalor Valor Epsilon',
  },
  {
    name: 'Payroll Setup',
    id: 'payroll-setup',
    description: 'Lorem Ipsum Dalor Valor Epsilon',
  },
  {
    name: 'Business Formation',
    id: 'business-formation',
    description: 'Lorem Ipsum Dalor Valor Epsilon',
  },
];

export default function HeaderComponent() {
  return (
    <MegaMenu>
      <Navbar.Brand href='/'>
        <img
          alt='Young & Company'
          src='/images/logo.webp'
          className='mr-3 h-6 sm:h-9'
        />
      </Navbar.Brand>
      <div className='flex flex-wrap items-center justify-between p-4 md:space-x-8'>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <MegaMenu.Dropdown toggle={<>Solutions</>}>
            <ul className='grid grid-cols-3'>
              <div className='space-y-4 p-4'>
                {solutionOptions.map((item, idx) => (
                  <li
                    key={idx}
                    className='flex flex-col'>
                    <a
                      href='#'
                      className='hover:text-primary-600 dark:hover:text-primary-500'>
                      {item.name}
                    </a>
                    <span className='text-sm'>{item.description}</span>
                  </li>
                ))}
              </div>
            </ul>
          </MegaMenu.Dropdown>
          {products.map((item, idx) => (
            <Navbar.Link
              key={idx}
              href={item.href}>
              {item.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>

        <Navbar.Link
          href='http://youngcotax.clientportal.com/'
          target='_blank'>
          <Button>Login</Button>
        </Navbar.Link>
      </div>
    </MegaMenu>
  );
}
