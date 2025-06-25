import React from 'react';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Guides from './pages/Guides';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';

// Layout
import Layout from './components/layout/LayoutComponent';

// Styles
import './index.css';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';

interface Product {
  name: string;
  description: string;
  href: string;
}

interface SolutionOption {
  name: string;
  id: string;
  tab: number;
}

const products: Product[] = [
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

const solutionOptions: SolutionOption[] = [
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

const App: React.FC = () => {
  return (
    <div className='mx-auto flex flex-col h-screen'>
      <Layout>
        <BrowserRouter>
          <div
            id='header'
            style={{
              position: 'sticky',
              top: '0',
              width: '100%',
              zIndex: '99',
            }}>
            <HeaderComponent
              solutionOptions={solutionOptions}
              products={products}
            />
          </div>

          <Routes>
            <Route
              path='/'
              element={<Home />}></Route>
            <Route
              path='/solutions/:solutionId'
              element={<Solutions />}></Route>
            <Route
              path='/about'
              element={<About />}></Route>
            <Route
              path='/guides'
              element={<Guides />}></Route>
            <Route
              path='/contact-us'
              element={<Contact />}></Route>
            {/* <Route
              path='/solutions'
              element={<Solutions />}></Route> */}
          </Routes>

          <div
            id='footer'
            className='py-4 mt-8'>
            <FooterComponent />
          </div>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
