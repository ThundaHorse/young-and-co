'use client';

import '../styles/pages/about.css';

const About = () => {
  return (
    <>
      <section id='about-intro'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='rounded-lg p-6 md:p-8'>
              <h2 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2'>
                Young & Company
              </h2>
              <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                Young & Company was founded with the mission statement of
                building long-term relationships with our clients to help save
                taxes for individual and businesses. We are a specialty tax firm
                dedicated to helping our clients through personalized tax
                services and strategies.
              </p>

              <br />

              <ul className='hero-intro'>
                <li>We Serve all 50 States and Puerto Rico.</li>
                <li>Experienced Team in Domestic and International Tax.</li>
                <li>10 Years of Excellence.</li>
                <li>Always Supporting Our Local Communities.</li>
              </ul>
            </div>
            {/* <div className='about-intro-right rounded-lg p-8 md:p-12'></div> */}
          </div>
        </div>
      </section>

      <section id='community-involvement'>
        <p className='text-center'>Community</p>
        <div className='py-8 px-4 mx-auto max-w-screen-xl'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='community-left rounded-lg p-8 md:p-12'>fdsa</div>
            <div className='community-right rounded-lg p-6 md:p-8'>
              <h2 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2'>
                Young & Company
              </h2>
              <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                Young & Company was founded with the mission statement of
                building long-term relationships with our clients to help save
                taxes for individual and businesses. We are a specialty tax firm
                dedicated to helping our clients through personalized tax
                services and strategies.
              </p>

              <br />

              <ul className='hero-intro'>
                <li>We Serve all 50 States and Puerto Rico.</li>
                <li>Experienced Team in Domestic and International Tax.</li>
                <li>10 Years of Excellence.</li>
                <li>Always Supporting Our Local Communities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='partnerships'>
        <p className='text-center'>Partnerships</p>
        <div className='py-8 px-4 mx-auto max-w-screen-xl'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='partnerships-left rounded-lg p-8 md:p-12'>
              <h2 className='text-gray-900 dark:text-white text-3xl font-extrabold mb-2'>
                Young & Company
              </h2>
              <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                Young & Company was founded with the mission statement of
                building long-term relationships with our clients to help save
                taxes for individual and businesses. We are a specialty tax firm
                dedicated to helping our clients through personalized tax
                services and strategies.
              </p>

              <br />

              <ul className='hero-intro'>
                <li>We Serve all 50 States and Puerto Rico.</li>
                <li>Experienced Team in Domestic and International Tax.</li>
                <li>10 Years of Excellence.</li>
                <li>Always Supporting Our Local Communities.</li>
              </ul>
            </div>
            <div className='partnerships-right rounded-lg p-6 md:p-8'>fdsa</div>
          </div>
        </div>
      </section>

      <hr />
    </>
  );
};

export default About;
