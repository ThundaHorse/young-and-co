'use client';

import { Tabs, TabsRef } from 'flowbite-react';
import '../styles/pages/solutions.css';
import { useEffect, useRef, useState } from 'react';

const Solutions = () => {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 'accounting',
      title: 'Accounting',
      intro: 'Turn Accounting into a Value-Added Process',
      desc: 'Managing your accounting can be a difficult and time-consuming task. We provide organized, reliable financial record support on a monthly, quarterly, or annual basis. Our experienced team can scale with your needs, offering everything from basic accounting services to guidance for managing growth.',
      intro2: 'How We Help',
      desc2: [
        'Year-round support to help guide you and answer any accounting questions you may have.',
        'Provide your financial statements on a monthly basis to give an accurate reflection of your income, expenses, and tax projections.',
        'Review on a regular basis to evaluate your business performance and stay proactive through a strategic tax plan that fits your situation.',
        'Review for any irregularities in spending to deter any fraud or identity theft.',
        'Help ensure that you stay compliant with all tax obligations.',
        'Streamline your accounting through integration of your technology platforms to reduce administrative and recurring tasks.',
      ],
      image: '/images/solutions/accounting.webp',
    },
    {
      id: 'bookkeeping',
      title: 'Bookkeeping',
      intro: 'Let Us Help You Make Informed Decisions',
      desc: 'Let us handle the organization and maintenance, so you can focus on growing your business. Our bookkeeping services will keep your finances organized, providing a clear view of your company’s health and profitability.',
      subDesc:
        "You didn't start your business to spend hours on bookkeeping. We keep your books up to date and error free. By keeping accurate records of you business’s financial transactions, bookkeeping can reveal the true health and profitability of your organization. It is essential to get a snapshot of your business, so you can make crucial decisions that will ensure future success.",
      intro2: 'How We Help',
      desc2: [
        'Financial statements provided on a monthly basis.',
        'Reconciliation of your bank and credit card statements.',
        'Categorization of all transactions.',
        'Data outlier detection and monitoring of expenses based off industry averages data.',
        'Maximize your deductions - Save more on taxes, without sacrificing your time with home office and other personal expense tracking.',
      ],
      image: '/images/solutions/bookkeeping.webp',
    },
    {
      id: 'taxes',
      title: 'Taxes',
      intro: 'Simplify Tax Preparation',
      desc: 'Tax season doesn’t have to be a hassle. We’ll ensure you’re prepared and, if necessary, help you file an extension and pay the right amount of estimated taxes to avoid penalties.',
      subDesc:
        "You know about how to grow your business, we know about small business taxes. Focus on what you love and we'll provide your quarterly tax estimates and annual business and personal tax solutions. Plus, as tax laws and regulations are always changing, it’s important to be up-to-date.",
      intro2: 'How We Help',
      desc2: [
        'Tax return filing for federal, state, and local (if applicable).',
        'Tax return extension filing if needed.',
        'Explain your tax return to make sure you understand your filing.',
        'Provide Schedule K1s for any business tax returns.',
        'Provide and make quarterly estimated taxes.',
        'Handle any international tax implications and appropriate filings.',
      ],
      image: '/images/solutions/taxes.webp',
    },
    {
      id: 'formation',
      title: 'Formation',
      intro: "We'll Help Get  You Started",
      desc: 'Starting a business? We’ll help you set up your LLC or Corporation, handle essentials like EINs, bank accounts, payroll, and more, so you can confidently move forward on this exciting journey!',
      subDesc:
        'Every business must be registered as a legal entity. This not only offers important legal protection for the owners but also provides potential tax benefits that should be taken into account. Furthermore, choosing the appropriate structure is crucial when launching any new venture.',
      intro2: 'How We Help',
      desc2: [
        'Consultation on the best entity for your business, trust, or investments.',
        'Formation of your LLC or Corporation.',
        'Analysis on applicable State for company registration and identification of any required foreign companies.',
        'Structuring a multiple layer company to protect assets.',
        'Registration with any relevant State, application for an EIN, creation of draft operating agreement, and application of S-Corp status (if needed).',
      ],
      image: '/images/solutions/formation.webp',
    },
    {
      id: 'payroll',
      title: 'Payroll',
      intro: "Let's Pay Yourself and Your Employees",
      desc: 'Managing payroll can be a time-intensive task, particularly for small businesses with a small team. Implementing a payroll system can help simplify and automate the process, saving you time and ensuring your employees are paid accurately and on schedule.',
      subDesc:
        "Get your payroll in order with our help. We've partnered up with Gusto, Paychex, and ADP to help you streamline your payroll process.",
      intro2: 'How We Help',
      desc2: [
        'Determination on whether an employee should be paid as W2 or as a 1099 contractor to comply with federal and state laws.',
        'Calculation and maintenance of reasonable salary for S-Corporations.',
        'Establishment of retirement plans, health insurance, and other fringe benefits for you and your team.',
        'Utilization of federal and state tax incentives and credits to ensure you get every dollar you are entitled to.',
      ],
      image: '/images/solutions/payroll.webp',
    },
    {
      id: 'planning',
      title: 'Strategic Planning',
      intro: 'Maximize Your Investments and Minimize Taxes',
      desc: 'Without an effective tax plan, you may be losing money each year without even realizing it. By strategically planning, you can take full advantage of available tax breaks, ensuring you don’t pay more than needed. Identifying ways to maximize your savings can significantly impact the amount of money that stays in your pocket.',
      subDesc: '',
      intro2: 'How We Help',
      desc2: [
        'Create a personalized tax plan to meet your financial, business, and personal goals.',
        'Analyze all income and investments to optimize your tax savings and establish a long-term plan.',
        'Analyze your business and investment situation(s) to ensure that all direct and indirect expenses are being captured.',
        'Utilization of federal and state tax incentives and credits to ensure you get every dollar you are entitled to.',
        'Establishment of Puerto Rico residency (if applicable).',
        'Quarterly review meetings to discuss your tax plan, estimate tax projections for the year, and implement new strategies as things change.',
        'Year-round support to help you understand your tax situation and answer any questions you may have.',
      ],
      image: '/images/solutions/strategic-planning.webp',
    },
  ];

  const handleTabClick = (tab: number) => {
    console.log(tab);
  };

  useEffect(() => {
    const activeTabFromUrl = window.location.hash.split('#')[1];

    if (parseInt(activeTabFromUrl)) {
      setActiveTab(parseInt(activeTabFromUrl));
      tabsRef.current?.setActiveTab(parseInt(activeTabFromUrl));
    }
  }, [activeTab]);

  return (
    <>
      <section id='solutions-intro'>
        <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
          <div
            className='p-4 rounded-lg'
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl'>
              Solutions
            </h2>
            <p className='mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48'>
              <b>We believe that your success is our success.</b>
            </p>

            <p className='text-white'>
              We serve the needs of every single client, whether they are a
              large, multi-national corporation, a small to medium sized
              company, or an individual.
            </p>
          </div>
        </div>
      </section>

      <section id='solutions-tabs'>
        <div className='px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-8'>
          <Tabs
            ref={tabsRef}
            onActiveTabChange={(tab) => handleTabClick(tab)}
            className='justify-center'
            aria-label='Solutions Offered'
            variant='underline'>
            {solutions.map((item) => (
              <Tabs.Item
                key={item.id}
                active
                title={item.title}>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div className='tab-left text-left'>
                    <h2 className='text-3xl font-extrabold dark:text-white'>
                      {item.title}
                    </h2>

                    <br />

                    <h2 className='text-2xl font-extrabold dark:text-white'>
                      {item.intro}
                    </h2>

                    <br />

                    <span className='font-medium text-gray-800 dark:text-white'>
                      {item.desc}
                    </span>

                    {item.subDesc ? (
                      <>
                        <br />
                        <br />
                        {item.subDesc}
                      </>
                    ) : (
                      <></>
                    )}

                    <br />
                    <br />

                    <h2 className='text-2xl font-extrabold dark:text-white'>
                      {item.intro2}
                    </h2>

                    <br />

                    <span className='font-medium text-gray-800 dark:text-white'>
                      <ul>
                        {item.desc2.map((desc, idx) => (
                          <li
                            style={{ listStyle: 'inside' }}
                            key={idx}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </span>
                  </div>

                  <div className='tab-right flex justify-center'>
                    <img
                      className='rounded-xl'
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </div>
              </Tabs.Item>
            ))}
          </Tabs>
        </div>
      </section>

      <hr />
    </>
  );
};

export default Solutions;
