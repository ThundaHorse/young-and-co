'use client';

import { Carousel } from 'flowbite-react';

const Guides = () => {
  return (
    <>
      <section>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16'>
          <h2 className='text-4xl font-extrabold dark:text-white'>
            Lorem Ipsum
          </h2>
          <p className='my-4 text-lg text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            illum illo vitae earum, id minima velit ad doloremque dolorum
            maiores molestiae perspiciatis nostrum delectus inventore quo aut.
            Ex, corrupti? Labore?
          </p>
          <p className='mb-4 text-lg font-normal text-gray-500 dark:text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            aperiam maiores, velit illum atque ipsum esse, modi perspiciatis a
            accusantium, mollitia non asperiores vero! Neque consectetur veniam
            quas repudiandae illo. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Rerum placeat ut eum vitae omnis eaque quis
            pariatur voluptatibus. Commodi vero eligendi sunt neque rem veniam
            nihil quas nemo! Eos, quod.
          </p>
          <a
            href='#'
            className='inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline'>
            Lorem
            <svg
              className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </div>
      </section>

      <section>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16'>
          <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
            <Carousel>
              <img
                src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
                alt='...'
              />
              <img
                src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
                alt='...'
              />
              <img
                src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
                alt='...'
              />
              <img
                src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
                alt='...'
              />
              <img
                src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
                alt='...'
              />
            </Carousel>
          </div>
        </div>
      </section>

      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16'>
          <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8'>
            <a
              href='#'
              className='bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2'>
              <svg
                className='w-2.5 h-2.5 me-1.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 14'>
                <path d='M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z' />
              </svg>
              Dolor
            </a>
            <h1 className='text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur odit esse tempora, aspernatur deserunt nemo ipsa nisi
              commodi dicta culpa aut, ipsam, necessitatibus illo magnam quo
              sequi et id error.
            </h1>
            <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-6'>
              Static websites are now used to bootstrap lots of websites and are
              becoming the basis for a variety of tools that even influence both
              web designers and developers.
            </p>
            <a
              href='#'
              className='inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
              Lorem Ipsum Dolor Absiet
              <svg
                className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </a>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
              <a
                href='#'
                className='bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2'>
                <svg
                  className='w-2.5 h-2.5 me-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 18'>
                  <path d='M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z' />
                </svg>
                Lorem
              </a>
              <h2 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2'>
                Lorem Ipsum Dolor
              </h2>
              <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p>
              <a
                href='#'
                className='text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center'>
                Lorem Ipsum
                <svg
                  className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'>
                  <path
                    stroke='currentColor'
                    strokeLinejoin='round'
                    strokeLinecap='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
              <a
                href='#'
                className='bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2'>
                <svg
                  className='w-2.5 h-2.5 me-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 16'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15'
                  />
                </svg>
                Lorem
              </a>
              <h2 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2'>
                Lorem Ipsum
              </h2>
              <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illum error a totam debitis, iusto adipisci architecto ipsam
                dolore consectetur sint, provident libero ipsa nam! Omnis libero
                atque optio magni. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Recusandae, optio delectus. Repellendus, sed
                unde aliquam soluta sequi atque minus quibusdam, est enim fugit
                cumque at. Adipisci sed ad labore iste. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Deleniti, placeat dignissimos
                error exercitationem nihil hic reprehenderit explicabo et
                voluptatum debitis, delectus eveniet necessitatibus tempore.
                Voluptates dolor labore debitis expedita sunt.
              </p>
              <a
                href='#'
                className='text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center'>
                Ipsum
                <svg
                  className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guides;
