import { Button, Dropdown, DropdownItem, Navbar } from 'flowbite-react';
import '../../styles/components/header.css';

interface SolutionOption {
  name: string;
  id: string;
  tab: number;
}

interface Product {
  name: string;
  description: string;
  href: string;
}

interface HeaderComponentProps {
  solutionOptions: SolutionOption[];
  products: Product[];
}

export default function HeaderComponent({
  solutionOptions,
  products,
}: HeaderComponentProps) {
  const handleClick = (itemId: string) => {
    const solutionTab = solutionOptions.find(
      (option) => option.id === itemId
    )?.id;
    window.location.href = `/solutions/${solutionTab}`;
  };

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
                <DropdownItem key={idx}>
                  <div className='flex flex-col'>
                    <span
                      onClick={() => handleClick(item.id)}
                      className='block text-sm'
                      id={item.id}>
                      {item.name}
                    </span>
                  </div>
                </DropdownItem>
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
