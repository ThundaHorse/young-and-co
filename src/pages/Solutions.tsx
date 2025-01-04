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
      class: 'bg-gray-50 p-14 mt-0',
      image: '/images/solutions/accounting.webp',
    },
    {
      id: 'bookkeeping',
      title: 'Bookkeeping',
      intro: 'Let Us Help You Make Informed Decisions',
      desc: 'Let us handle the organization and maintenance, so you can focus on growing your business. Our bookkeeping services will keep your finances organized, providing a clear view of your company’s health and profitability.',
      intro2: 'How We Help',
      desc2: [
        'Financial statements provided on a monthly basis.',
        'Reconciliation of your bank and credit card statements.',
        'Categorization of all transactions.',
        'Data outlier detection and monitoring of expenses based off industry averages data.',
        'Maximize your deductions - Save more on taxes, without sacrificing your time with home office and other personal expense tracking.',
      ],
      class: 'p-14 mt-0',
      image: '/images/solutions/accounting.webp',
    },
    {
      id: 'taxes',
      title: 'Taxes',
      intro: 'Taxes Intro',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odit corrupti porro nostrum ut aspernatur aut adipisci, dicta reprehenderit? Hic esse enim ad sint culpa explicabo delectus. Est, quaerat assumenda!',
      intro2: '',
      desc2: [],
      class: 'bg-gray-50 p-14 mt-0',
      image: '/images/solutions/accounting.webp',
    },
    {
      id: 'formation',
      title: 'Formation',
      intro: 'Formation Intro',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odit corrupti porro nostrum ut aspernatur aut adipisci, dicta reprehenderit? Hic esse enim ad sint culpa explicabo delectus. Est, quaerat assumenda!',
      intro2: '',
      desc2: [],
      class: 'p-14 mt-0',
      image: '/images/solutions/accounting.webp',
    },
    {
      id: 'payroll',
      title: 'Payroll',
      intro: 'Payroll Intro',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odit corrupti porro nostrum ut aspernatur aut adipisci, dicta reprehenderit? Hic esse enim ad sint culpa explicabo delectus. Est, quaerat assumenda!',
      intro2: '',
      desc2: [],
      class: 'bg-gray-50 p-14 mt-0',
      image: '/images/solutions/accounting.webp',
    },
    {
      id: 'planning',
      title: 'Strategic Planning',
      intro: 'Strategic planning intro',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odit corrupti porro nostrum ut aspernatur aut adipisci, dicta reprehenderit? Hic esse enim ad sint culpa explicabo delectus. Est, quaerat assumenda!',
      intro2: '',
      desc2: [],
      class: 'p-14 mt-0',
      image: '/images/solutions/accounting.webp',
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
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
              Solutions
            </h2>
            <p className='mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              odit corrupti porro nostrum ut aspernatur aut adipisci, dicta
              reprehenderit? Hic esse enim ad sint culpa explicabo delectus.
              Est, quaerat assumenda!
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
            {solutions.map((item, index) => (
              <Tabs.Item
                key={index}
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
                      alt='Accounting'
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
