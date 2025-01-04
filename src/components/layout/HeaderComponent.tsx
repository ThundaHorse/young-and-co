'use client';

import { Button, Dropdown, Navbar } from 'flowbite-react';
import '../../styles/components/header.css';

const products = [
  {
    name: 'About',
    description: 'About',
    href: '/about',
  },
  // {
  //   name: 'Guides',
  //   description: 'Guides Page',
  //   href: '/guides',
  // },
  {
    name: 'Contact',
    description: 'Contact Page',
    href: '/contact-us',
  },
];

const solutionOptions = [
  {
    name: 'Accounting',
    id: 'accounting',
    tab: 0,
  },
  {
    name: 'Bookkeeping',
    id: 'bookkeeping',
    tab: 1,
  },
  {
    name: 'Taxes',
    id: 'taxes',
    tab: 2,
  },
  {
    name: 'Formation',
    id: 'formation',
    tab: 3,
  },
  {
    name: 'Payroll',
    id: 'payroll',
    tab: 4,
  },
  {
    name: 'Strategic Planning',
    id: 'strategic-planning',
    tab: 5,
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
          <div className='lg:pl-0 pl-3'>
            <Dropdown
              label='Solutions'
              inline>
              {solutionOptions.map((item, idx) => (
                <Dropdown.Item key={idx}>
                  <div className='flex flex-col'>
                    <Navbar.Link
                      href={`/solutions#${item.tab}`}
                      id={item.id}>
                      {item.name}
                    </Navbar.Link>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>

          {products.map((item, idx) => (
            <Navbar.Link
              key={idx}
              href={item.href}>
              {item.name}
            </Navbar.Link>
          ))}

          <Button color='light'>
            <a
              href='http://youngcotax.clientportal.com/'
              target='_blank'>
              Login
            </a>
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <hr />
    </>
  );
}
