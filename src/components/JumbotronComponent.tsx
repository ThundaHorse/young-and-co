'use client';

import { Card } from 'flowbite-react';
import '../styles/components/jumbotron.css';

export default function JumbotronComponent() {
  const offerings = [
    {
      icon: '/icons/offer/bank.png',
      title: 'Accounting',
      description: "You handle the business. We'll handle the numbers.",
      tab: 0,
    },
    {
      icon: '/icons/offer/book.png',
      title: 'Bookkeeping',
      description:
        'Monthly bookkeeping to track your income and expenses to understand your financials.',
      tab: 1,
    },
    {
      icon: '/icons/offer/tax-bag.png',
      title: 'Taxes',
      description:
        'Prepare your business tax returns, personal tax returns, and year-round tax guidance.',
      tab: 2,
    },
    {
      icon: '/icons/offer/flow-chart.png',
      title: 'Formation',
      description:
        'Set up your new company, protect your assets, and make tax elections.',
      tab: 3,
    },
    {
      icon: '/icons/offer/calendar.png',
      title: 'Payroll',
      description:
        'Streamline your payroll process to pay yourself and your employees.',
      tab: 4,
    },
    {
      icon: '/icons/offer/king.png',
      title: 'Strategic Planning',
      description:
        'Meet with a specialist one-on-one every quarter to develop and implement a tailormade tax saving strategy.',
      tab: 5,
    },
  ];

  const renderHelpSection = () => {
    return (
      <div className='grid grid-cols-[1fr] gap-x-0 gap-y-8 sm:grid-cols-[repeat(2,1fr)] sm:gap-x-8 xl:grid-cols-[repeat(4,1fr)]'>
        <div className='flex flex-row items-start gap-8 sm:flex-col sm:items-start sm:gap-6'>
          <div
            className='flex h-[65px] w-[65px] min-w-[65px] items-center justify-center rounded-[12px] [&>svg]:h-[32px] [&>svg]:w-[32px]'
            style={{ backgroundColor: 'rgb(254, 230, 231)' }}>
            <img
              className='w-7'
              src='/icons/help/piggy-bank.webp'
              alt='save money'
            />
          </div>
          <div className='text-left'>
            <h2 className='typography-h6 mb-4 font-mierb-book text-[22px] font-medium text-gray-800 sm:mb-6 sm:text-[24px]'>
              Save Money
            </h2>
            <p className='typography-body1 font-mierb-book font-medium text-gray-800'>
              Clients save on average{' '}
              <b>
                $20,000<sup>*</sup>
              </b>{' '}
              a year <b>through proactive & strategic tax planning.</b>
            </p>
          </div>
        </div>

        <div className='flex flex-row items-start gap-8 sm:flex-col sm:items-start sm:gap-6'>
          <div
            className='flex h-[65px] w-[65px] min-w-[65px] items-center justify-center rounded-[12px] [&>svg]:h-[32px] [&>svg]:w-[32px]'
            style={{ backgroundColor: 'rgb(231, 220, 231)' }}>
            <img
              src='/icons/help/alarm-clock.webp'
              alt='Save Time'
            />
          </div>
          <div className='text-left'>
            <h2 className='typography-h6 mb-4 font-mierb-book text-[22px] font-medium text-gray-800 sm:mb-6 sm:text-[24px]'>
              Save Time
            </h2>
            <p className='typography-body1 font-mierb-book font-medium text-gray-800'>
              We understand that business owners have multiple tasks, let us{' '}
              <b>simplify</b> your accounting.
            </p>
          </div>
        </div>

        <div className='flex flex-row items-start gap-8 sm:flex-col sm:items-start sm:gap-6'>
          <div
            className='flex h-[65px] w-[65px] min-w-[65px] items-center justify-center rounded-[12px] [&>svg]:h-[32px] [&>svg]:w-[32px]'
            style={{ backgroundColor: 'rgb(217, 237, 232)' }}>
            <img
              src='/icons/help/calculator.webp'
              alt='Informed Decisions'
            />
          </div>
          <div className='text-left'>
            <h2 className='typography-h6 mb-4 font-mierb-book text-[22px] font-medium text-gray-800 sm:mb-6 sm:text-[24px]'>
              Make Informed Decisions
            </h2>
            <p className='typography-body1 font-mierb-book font-medium text-gray-800'>
              Work with your very own
              <b> finance team of seasoned professionals</b> to understand the
              in's and out's of your business.
            </p>
          </div>
        </div>

        <div className='flex flex-row items-start gap-8 sm:flex-col sm:items-start sm:gap-6'>
          <div
            className='flex h-[65px] w-[65px] min-w-[65px] items-center justify-center rounded-[12px] [&>svg]:h-[32px] [&>svg]:w-[32px]'
            style={{ backgroundColor: 'rgb(255, 240, 229)' }}>
            <img
              src='/icons/help/bullseye.webp'
              alt='Build towards the future'
            />
          </div>
          <div className='text-left'>
            <h2 className='typography-h6 mb-4 font-mierb-book text-[22px] font-medium text-gray-800 sm:mb-6 sm:text-[24px]'>
              Build Towards the Future
            </h2>
            <p className='typography-body1 font-mierb-book font-medium text-gray-800'>
              We build <b>long-lasting relationships</b> with our clients to{' '}
              <b>understand</b> their{' '}
              <b>business, financial, and personal goals</b>.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderOfferSection = () => {
    return (
      <div className='flex sm:flex-col items-center justify-center'>
        <div className='grid grid-cols-[1fr] gap-x-0 lg:gap-x-8 gap-y-8 sm:grid-cols-[repeat(1,1fr)] xl:grid-cols-[repeat(3,1fr)]'>
          {offerings.map((item, idx) => (
            <Card
              key={idx}
              href={`/solutions#${item.tab}`}
              className='max-w-sm'>
              <div className='h-full flex items-center justify-center'>
                <img
                  className='w-8'
                  src={item.icon}
                  alt={item.description}
                />
              </div>
              <div>
                <h4 className='typography-h5 text-[28px]'>{item.title}</h4>
                <p className='typography-body1 text-gray-700 dark:text-gray-400'>
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <meta
        name='description'
        content='Strategic Tax Planning & Accounting Partners. We help our clients maximize their tax savings, build wealth, and to secure their financial future.'
      />
      <section id='hero'>
        <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 hero-intro'>
          <div
            className='p-4 rounded-lg'
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
              Strategic Tax Planning & Accounting Partners
            </h1>
            <p className='mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48'>
              We help our clients maximize their tax <b>tax savings</b>,{' '}
              <b>build wealth</b>, and to <b>secure their financial future.</b>
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section id='info'>
        <div className='px-4'>
          <p className='text-4xl font-extrabold mt-16 lg:mb-20 mb-10 md:mb-20'>
            How We Help Our Clients
          </p>
          <div className='p-8 sm:p-14 sm:pt-0'>{renderHelpSection()}</div>
        </div>
      </section>

      <hr />

      <section id='what-we-offer'>
        <div className='bg-gray-50 p-14 mt-0'>
          <p className='text-4xl font-extrabold lg:mb-20 mb-10 md:mb-20 sm:mb-16'>
            What We Offer Our Clients
          </p>
          {renderOfferSection()}
        </div>
      </section>

      <hr />
    </>
  );
}
