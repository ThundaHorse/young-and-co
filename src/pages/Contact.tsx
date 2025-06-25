import ContactForm from '../components/ContactForm';

const Contact = () => {
  const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

  return (
    <>
      <section>
        <div className='py-8 px-8 mx-auto max-w-screen-xl lg:py-16 text-center'>
          <h2 className='text-4xl font-extrabold dark:text-white'>
            Contact Us
          </h2>
          <p className='my-4 text-lg text-gray-500'>
            Fill out the form below and we will contact you as soon as possible!
          </p>
        </div>
      </section>

      <section>
        <ContactForm siteKey={siteKey} />
      </section>
    </>
  );
};

export default Contact;
