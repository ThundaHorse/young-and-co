'use client';

import { Button, Checkbox, Label, Textarea, TextInput } from 'flowbite-react';

const Contact = () => {
  return (
    <>
      <section>
        <div className='py-8 px-8 mx-auto max-w-screen-xl lg:py-16'>
          <h2 className='text-4xl font-extrabold dark:text-white'>
            Lorem Ipsum
          </h2>
          <p className='my-4 text-lg text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            illum illo vitae earum, id minima velit ad doloremque dolorum
            maiores molestiae perspiciatis nostrum delectus inventore quo aut.
            Ex, corrupti? Labore?
          </p>
        </div>
      </section>

      <section>
        <div className='flex justify-center'>
          <form className='flex max-w-md flex-col gap-4'>
            <div>
              <div className='mb-2 block'>
                <Label
                  htmlFor='email1'
                  value='Your email'
                />
              </div>
              <TextInput
                id='email1'
                type='email'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label
                  htmlFor='message'
                  value='Your Message'
                />
                <Textarea id='message' />
              </div>
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
