'use client';

import { Dropdown, Navbar } from 'flowbite-react';

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
    <>
      <Navbar rounded>
        <Navbar.Brand href='/'>
          <img
            alt='Young & Company'
            src='/images/logo.webp'
            className='mr-3 h-6 sm:h-9'
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {products.map((item, idx) => (
            <Navbar.Link
              key={idx}
              href={item.href}>
              {item.name}
            </Navbar.Link>
          ))}

          <div className='pl-3'>
            <Dropdown
              label='Solutions'
              inline>
              {solutionOptions.map((item, idx) => (
                <Dropdown.Item key={idx}>
                  <div className='flex flex-col'>
                    <Navbar.Link
                      href='#'
                      id={item.id}>
                      {item.name}
                    </Navbar.Link>
                    <p>{item.description}</p>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <hr />
    </>
  );
}
